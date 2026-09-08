export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 20
    const type = query.type as string | undefined

    const where = {
        statut: 'valide' as const,
        ...(type ? { type: type as any } : {}),
    }

    const [data, total] = await Promise.all([
        prisma.ressource.findMany({
            where,
            orderBy: { dateAjout: 'desc' },
            skip: (page - 1) * limit,
            take: limit,
        }),
        prisma.ressource.count({ where }),
    ])

    return {
        data,
        total,
        page,
        totalPages: Math.ceil(total / limit),
    }
})