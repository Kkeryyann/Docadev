export default defineEventHandler(async (event) => {
    await requireUserSession(event) // bloque si pas connecté

    const id = Number(getRouterParam(event, 'id'))
    const body = await readBody(event)

    return await prisma.ressource.update({
        where: { id },
        data: { statut: body.statut },
    })
})