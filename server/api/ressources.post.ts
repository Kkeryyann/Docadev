export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const existe = await prisma.ressource.findFirst({
        where: { lien: body.lien },
    })

    if (existe) {
        throw createError({
            statusCode: 409,
            message: 'Ce lien a déjà été proposé.',
        })
    }

    return await prisma.ressource.create({
        data: {
            titre: body.titre,
            type: body.type,
            description: body.description,
            lien: body.lien,
            statut: 'en_attente',
        },
    })
})
