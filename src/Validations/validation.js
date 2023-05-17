const validator = {}

validator.emailValidation = (email) => {
    if (!email || !email.includes('@')) return false
    return true
}
validator.nameValidator = (name) => {
    if (!name || name.length < 5) return false
    return true
}
validator.passwordValidation = (password) => {
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g)) {
        return false
    }
    return true
}
export default validator