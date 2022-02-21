import * as actionTypes from './productType'

const initState ={
    products: [       
  {
    "product_name": "test1",
    "product_price": "100",
    "id": "1"
  },
  {
    "product_name": "test2",
    "product_price": "200",
    "id": "2"
  },

]
}

const productReducer = (state=initState, action) =>
{
    switch (action.type){
        case actionTypes.REMOVE_PRODUCT:
            return{
                ...state, 
                products: state.products.filter(item=>item.id !== action.payload.id)
            }

        default:  return state;
    }
}
export default productReducer