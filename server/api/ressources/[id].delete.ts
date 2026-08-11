export default defineEventHandler(async (event) => {
    await requireUserSession(event)

    const id = Number(getRouterParam(event, 'id'))

    await prisma.ressource.delete({
        where: { id },
    })

    return { ok: true }
})