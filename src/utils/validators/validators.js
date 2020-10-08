export const requiredField = value => {
    if (value) return undefined
    return "This field is required"
}
export const maxLengthCreator = maxLength => value => {
        //!!!!!Очень интересный момент - проверка на value, undef value or not!!!!!
        //Потому что если будет value = null, то null.length выдаст ошибку
        if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
        return undefined

}