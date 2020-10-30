export const updateObjInArray = (items, objComprasionPropName, actionComprasionPropValue, objNewProp) => {
    return items.map(item => {
        if (item[objComprasionPropName] === actionComprasionPropValue) {
            return {
                ...item,
                ...objNewProp
            }
        }
        return item
    })
}