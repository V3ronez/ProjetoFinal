module.exports = app => {
    function existsOrError(value, msg) {
        if (!value) throw msg
        if (Array.isArray(value) && value.length === 0) throw msg
        if (typeof value === 'string' && !value.trim()) throw msg
        if (Array.isArray(value)) { //validando usando uma array
            for (const v of value) {
                existsOrError(user.name, 'Nome não informado')
                existsOrError(user.email, 'E-mail não informado')
                existsOrError(user.password, 'Senha não informada')
                existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
                equalsOrError(user.password, user.confirmPassword,
                    'Senhas não conferem')
            }
        }
    }

    function notExistsOrError(value, msg) {
        try {
            existsOrError(value, msg)
        } catch (msg) {
            return
        }
        throw msg
    }

    function equalsOrError(valueA, valueB, msg) {
        if (valueA !== valueB) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError }
}
