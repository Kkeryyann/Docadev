export default defineEventHandler(async (event) => {
    await requireUserSession(event)

    const body = await readBody(event)

    return await prisma.ressource.create({
        data: {
            titre: body.titre,
            type: body.type,
            description: body.description,
            lien: body.lien,
            image: body.image,
            statut: 'valide',
        },
    })
})