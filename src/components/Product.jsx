import React, { useEffect, useState } from 'react';

import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {addProduct, updateProduct} from '../redux/productAction'

function Product(props) {
    const dispacth = useDispatch();
    const isAdd = useSelector((store) => store.productReducer.isAdd)
    const productUpdate = useSelector((store) => store.productReducer.productUpdate)

    const [values, setValues] = useState({
        product_code : "" ,
        product_name: "" ,
        id: "" 
    })

    const setValueProduct = (key) => (e) => {
        setValues({...values, [key]: e.target.value})
    }

    useEffect(() => {
        setValues({
            product_code: productUpdate.product_code ,
            product_name: productUpdate.product_name,
            id: productUpdate.id
        })
    },[productUpdate])

    const onFinish = () => () => {
        isAdd ? dispacth(addProduct(values)) : dispacth(updateProduct(values))
        setValues({
            product_code : "" ,
            product_name: "" ,
            id: "" 
        })
        props.setIsOpen(!props.isOpen)

    };

    return (
        <div className='product' style={{posision:'relative'}}>
            <Button type="primary" onClick={() => props.setIsOpen()}>ADD</Button>
            <div className='popup' style={{display: props.isOpen ? 'block' : 'none'}}>
                <h2>{isAdd ? "Thêm" : "Sửa" } Sản Phẩm</h2>
                <div className='form-control'>
                    <label htmlFor="">Mã sản phẩm</label>
                    <input onChange={setValueProduct("product_code")} defaultValue={values.product_code}></input>
                </div>
                <div className='form-control'>
                    <label htmlFor="">Tên sản phẩm</label>
                    <input onChange={setValueProduct("product_name")} defaultValue={values.product_name}></input>
                </div>

                <div style={{marginTop:10}}>
                    <Button type="primary" style={{marginRight: 10}} onClick={onFinish()}>
                        {isAdd ? "ADD" : "UPDATE" }
                    </Button>
                    <Button type="" onClick={() => props.setIsOpen()}  style={{border: 0, background: 'transparent', color:'#000'}} >
                        cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Product;
