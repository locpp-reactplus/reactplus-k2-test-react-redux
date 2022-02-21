import * as actionTypes from './productType'

const initState ={
    products: [       
  {
    "product_code": "123",
    "product_name": "234",
    "id": "1"
  },
  {
    "product_code": "12",
    "product_name": "12",
    "id": "2"
  },
  {
    "product_code": "123",
    "product_name": "123",
    "id": "3"
  },
  {
    "product_code": "12345",
    "product_name": "111111111",
    "id": "5"
  },
  {
    "product_code": "1",
    "product_name": "2",
    "id": "6"
  },
  {
    "product_code": "1",
    "product_name": "2",
    "id": "7"
  },
  {
    "product_code": "sp1",
    "product_name": "1111",
    "id": "8"
  },
  {
    "product_code": "123",
    "product_name": "123",
    "id": "10"
  },
  {
    "product_code": "1",
    "product_name": "2",
    "id": "11"
  },
  {
    "product_code": "1",
    "product_name": "222222",
    "id": "12"
  },
  {
    "product_code": "123",
    "product_name": "long",
    "id": "13"
  },
  {
    "product_code": "abc",
    "product_name": "abc",
    "id": "14"
  },
  {
    "product_code": "qqq",
    "product_name": "qqq",
    "id": "15"
  }
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