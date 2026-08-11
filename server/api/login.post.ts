export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event)

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
        throw createError({ statusCode: 401, message: 'Identifiants invalides' })
    }

    const valide = await verifyPassword(user.password, password)
    if (!valide) {
        throw createError({ statusCode: 401, message: 'Identifiants invalides' })
    }

    await setUserSession(event, {
        user: { id: user.id, email: user.email },
    })

    return { ok: true }
})