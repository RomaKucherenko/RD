let isSubscribe = false

export const subscribe = _ => {
    isSubscribe = true
    console.log(isSubscribe)
}
export const unsubscribe = _ => {
    isSubscribe = false
    console.log(isSubscribe)
}
