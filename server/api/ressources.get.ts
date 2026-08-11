export default defineEventHandler(async () => {
    return await prisma.ressource.findMany({
        where: { statut: 'valide' },
        orderBy: { dateAjout: 'desc' },
    })
})