import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { join, extname } from 'node:path'

const MIME_TYPES: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
}

export default defineEventHandler(async (event) => {
    const filename = getRouterParam(event, 'file')
    if (!filename) {
        throw createError({ statusCode: 400, message: 'Nom de fichier manquant.' })
    }

    const isProd = process.env.NODE_ENV === 'production'
    const baseFolder = isProd ? join('.output', 'public', 'uploads') : join('public', 'uploads')
    const filePath = join(process.cwd(), baseFolder, filename)

    try {
        await stat(filePath)
    } catch {
        throw createError({ statusCode: 404, message: 'Image introuvable.' })
    }

    setHeader(event, 'Content-Type', MIME_TYPES[extname(filename).toLowerCase()] || 'application/octet-stream')
    setHeader(event, 'Cache-Control', 'public, max-age=31536000, immutable')

    return sendStream(event, createReadStream(filePath))
})