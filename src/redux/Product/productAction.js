import * as actionTypes from './productType'


export const RemoveProduct = (itemID) =>
{
    return {
        type: actionTypes.REMOVE_PRODUCT,
        payload:{
            id: itemID
        }
    }
}

export const addProduct = (itemID) =>
{
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: {
            id: itemID
        }
    }
}

