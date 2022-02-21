import { ADD_PRODUCT, GET_PRODUCT_LIST, EDIT_PRODUCT, CANCEL, UPDATE_PRODUCT,REMOVE_PRODUCT  } from "./productContant";
import axios from "../axios/config";

export const addProduct = (payload) => async dispacth => {
    try {
        axios.post('/products', payload)
        dispacth({
            type: ADD_PRODUCT,
            payload: payload
        });
        alert("Add success")
    } catch ( err ) {
        console.log(err);
    }
    
};

export const getProductList = () => async dispacth => {
    try {
        const products = await axios.get('/products')
        dispacth({
            type: GET_PRODUCT_LIST,
            payload: products.data
        });
    } catch ( err ) {
        console.log(err);
    }
};

export const editProduct = (data) => async dispacth => {
    try {
        dispacth({
            type: EDIT_PRODUCT,
            payload: data
        });
    } catch ( err ) {
        console.log(err);
    }
};

export const cancel = (data) => async dispacth => {
    try {
        dispacth({
            type: CANCEL,
            payload: data
        });
    } catch ( err ) {
        console.log(err);
    }
};

export const updateProduct = (data) => async dispacth => {
    try {
        axios.put('/products/'+ data.id , data)
        dispacth({
            type: UPDATE_PRODUCT,
            payload: data
        });
        alert("Update success")
    } catch ( err ) {
        console.log(err);
    }
};

export const deleteProduct = (data) => async dispacth => {
    try {
        axios.delete('/products/'+ data.id, data)
        dispacth({
            type: REMOVE_PRODUCT,
            payload: data
        });
        alert("delete product")
    } catch ( err ) {
        console.log(err);
    }
};