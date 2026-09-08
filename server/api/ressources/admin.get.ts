export default defineEventHandler(async (event) => {
    await requireUserSession(event)

    return await prisma.ressource.findMany({
        orderBy: { dateAjout: 'desc' },
    })
})