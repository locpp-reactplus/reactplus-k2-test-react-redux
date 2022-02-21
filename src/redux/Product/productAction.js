import * as actionTypes from './productType'

export const addToCart = (itemID) =>
{
    return {
        type: actionTypes.ADD_TO_CART,
        payload:{
            id: itemID
        }
    }
}

export const RemoveProduct = (itemID) =>
{
    return {
        type: actionTypes.REMOVE_PRODUCT,
        payload:{
            id: itemID
        }
    }
}

