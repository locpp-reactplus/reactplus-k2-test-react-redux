import axios from "axios";

const url = process.env.REACT_APP_BASE_API_URL + "/books";

export const getAllBooks = async () => {
    return await axios.get(url);
};

export const getBook = async (id : string) => {
    return await axios.get(url + "/" + id);
};

export const addBook = async ( name : string , price : number) => {
    return await axios.post(url, {
        name,
        price
    })
};

export const removeBook = async (id : string) => {
    return await axios.delete(url + "/" + id);
}

export const updateBook = (id : string , name : string , price : number) => {
    return axios.put(url + "/" + id , {
        name,
        price
    })
}


