export default defineEventHandler(async (event) => {
    await requireUserSession(event) // bloque si pas connecté

    const id = Number(getRouterParam(event, 'id'))
    const body = await readBody(event)
    const { titre, type, description, lien, image, statut } = body

    return await prisma.ressource.update({
        where: { id },
        data: {
            ...(titre !== undefined && { titre }),
            ...(type !== undefined && { type }),
            ...(description !== undefined && { description }),
            ...(lien !== undefined && { lien }),
            ...(image !== undefined && { image }),
            ...(statut !== undefined && { statut }),
        },
    })
})