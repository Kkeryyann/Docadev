export default defineEventHandler(async (event) => {
    await requireUserSession(event)

    return await prisma.ressource.findMany({
        where: { statut: 'en_attente' },
        orderBy: { dateAjout: 'asc' },
    })
})
