export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    return await prisma.ressource.create({
        data: {
            titre: body.titre,
            type: body.type,
            description: body.description,
            lien: body.lien,
            source: body.source,
            sourceAutrePrecision: body.sourceAutrePrecision,
            statut: 'en_attente',
        },
    })
})