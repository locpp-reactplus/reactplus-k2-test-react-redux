import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    datas : [],
    datafom : [],
};

const url = 'https://61b75f1864e4a10017d18ada.mockapi.io/api/books/';

export const GetData = createAsyncThunk(
    'getdata',
    async () =>{
        const reponse = await axios.get(url);
        console.log('GET data',reponse.data)
        return reponse.data;
    }
)

export const PostData = createAsyncThunk(
    'postdata',
    async (value) =>{
        const reponse = await axios.post(url,value);
        console.log('Post data',reponse.data)
        return reponse.data;
    }
)

export const DeleteData = createAsyncThunk(
    'deletedata',
    async (id) =>{
        const reponse = await axios.delete(url + id);
        console.log('Delete data',reponse.data)
        return reponse.data;
    }
)

export const PutData = createAsyncThunk(
    'putdata',
    async (vl) =>{
        const reponse = await axios.put(url + vl.id,vl);
        console.log('put data',reponse.data)
        return reponse.data;
    }
)

export const FomData = createAsyncThunk(
    'fomdata',
    async (vl) =>{
        console.log('data fom ',vl);
        return vl;
    }
)

export const TodoSlice = createSlice({
    name : 'todobooks',
    initialState,

    extraReducers : (builder)=>{

        builder
        .addCase(GetData.fulfilled, (state,action) => {
            state.datas = action.payload;
          })
        .addCase(PostData.fulfilled, (state,action) => {
            state.datas = [...state.datas , action.payload];
        })
        .addCase(DeleteData.fulfilled, (state,action) => {
            state.datas = state.datas.filter(inlis => inlis.id !== action.payload.id);
        })
        .addCase(PutData.fulfilled, (state,action) => {
            const timput = state.datas.findIndex(inx => inx.id === action.payload.id);
            state.datas[timput] = action.payload;
        })
        .addCase(FomData.fulfilled, (state,action) => {
            state.datafom = action.payload
        })

    }

})

export const dataVluae = (state) => state.stores.datas;
export const dataFomVl = (state) => state.stores.datafom;

const  rootReducer = TodoSlice.reducer;

export default rootReducer