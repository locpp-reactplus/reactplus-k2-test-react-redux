import React from 'react';
import { Table, Tag, Space } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'
import { useSelector } from 'react-redux';
import Delete from '../Delete';
import Add from '../Add';
import Edit from '../Edit';


function BookList() {
    const [products, setProducts] = useState([])
    const todoProducts = useSelector((state) => state.products)
    console.log('TEST', todoProducts);
    const getProduct = async () => {
        const product = await axios.get("https://61b75f1864e4a10017d18ada.mockapi.io/api/books")
        setProducts(product.data)

    }
    const handleDeleteProduct = (value)=>
    {

    }
    useEffect(() => { getProduct() }, [])
    const data = useSelector(state => state.products)
    const handleUpdate =(name, price)=>
    {
        localStorage.setItem('productName', name)
        localStorage.setItem('productPrice', price)
    }
    console.log(data);
    const renderProduct = () => (
        products.map(prod => (
            <tr>
                <td>{prod.product_name}</td>
                <td>{prod.product_price}</td>
                <td className='btn-action'>
                    <button onClick={()=>{handleUpdate(prod.product_name, prod.product_price)}} type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#update">Edit</button>
                    <button type="button" class="btn btn-outline-primary btn-action-item" data-toggle="modal" data-target="#delete">Delete</button>
                </td>
                <Delete />
                <Edit />
            </tr>
        ))

    )
    return (

        <div>
            <h1 class="text-center">Book List</h1>
            <div>
                <Add/>
            </div>
            <table class="text-center table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Tên sách</th>
                        <th scope="col">Giá</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {renderProduct()}
                </tbody>
            </table>
        </div>
    );
}
export default BookList;