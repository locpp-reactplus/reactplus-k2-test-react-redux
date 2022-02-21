import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    EDIT_PRODUCT,
    UPDATE_PRODUCT,
    GET_PRODUCT_LIST,
    CANCEL
} from "./productContant";

const initialState = {
    products: [],
    isAdd: true,
    productUpdate: {}
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return {
                ...state,
                products: [...action.payload]
            };

        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };

        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload.id)
            };
        case EDIT_PRODUCT:
            return {
                ...state,
                isAdd: false,
                productUpdate: action.payload
            };
        case CANCEL:
            return {
                ...state,
                isAdd: true,
                productUpdate: {}
            };
        case UPDATE_PRODUCT:
            const list = state.products.map((product) => {
                if (product.id === action.payload.id) {
                    return { ...action.payload };
                }
                return product;
            });
            return {
                ...state,
                products: [...list],
                isAdd: true
            };

        default:
            return state;
    }
};

export default productReducer;