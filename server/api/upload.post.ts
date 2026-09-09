import { randomUUID } from 'node:crypto'
import { writeFile, mkdir } from 'node:fs/promises'
import { join, extname } from 'node:path'

export default defineEventHandler(async (event) => {
    await requireUserSession(event)

    const form = await readMultipartFormData(event)
    const fichier = form?.find(f => f.name === 'image')

    if (!fichier) {
        throw createError({ statusCode: 400, message: 'Aucun fichier reçu.' })
    }

    const extensionsAutorisees = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
    const extension = extname(fichier.filename || '').toLowerCase()

    if (!extensionsAutorisees.includes(extension)) {
        throw createError({ statusCode: 400, message: 'Type de fichier non autorisé.' })
    }

    const isProd = process.env.NODE_ENV === 'production'
    const baseFolder = isProd ? join('.output', 'public', 'uploads') : join('public', 'uploads')
    const dossier = join(process.cwd(), baseFolder)

    await mkdir(dossier, { recursive: true })

    const nomFichier = `${randomUUID()}${extension}`
    await writeFile(join(dossier, nomFichier), fichier.data)

    return { url: `/uploads/${nomFichier}` }
})