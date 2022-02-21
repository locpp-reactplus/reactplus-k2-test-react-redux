import React from 'react';
import { Table, Tag, Space } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Delete from '../Delete';
import Add from '../Add';
import Update from '../Update';

function Home(props) {
    const [products, setProducts] = useState([])
    const todoProducts = useSelector((state) => state.products)
    console.log('TEST', todoProducts);
    const getProduct = async () => {
        const product = await axios.get("https://61b75f1864e4a10017d18ada.mockapi.io/api/products")
        setProducts(product.data)

    }
    const handleDeleteProduct = (value)=>
    {

    }
    useEffect(() => { getProduct() }, [])
    const data = useSelector(state => state.products)
    const handleUpdate =(code, name)=>
    {
        localStorage.setItem('productCode', code)
        localStorage.setItem('productName', name)
    }
    console.log(data);
    const renderProduct = () => (
        products.map(prod => (
            <tr>
                <td>{prod.product_code}</td>
                <td>{prod.product_name}</td>
                <button onClick={()=>{handleUpdate(prod.product_code, prod.product_name)}} type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#update">Update</button>
                <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#delete">Xóa</button>
                <Delete />
                <Update/>
            </tr>
        ))

    )
    return (

        <div>
            <h1 class="text-center">Danh sách sản phẩm</h1>
            <div>
                <Add/>
            </div>
            <table class="text-center table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Mã sản phẩm</th>
                        <th scope="col">Tên sản phẩm</th>
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

export default Home;