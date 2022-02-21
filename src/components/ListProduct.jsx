import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Table, Space, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {getProductList, editProduct, cancel, deleteProduct} from '../redux/productAction'

function Delete (record) {
    const dispacth = useDispatch();
    const [isDelete, setIsDelete] = useState(false)

    const handleDelete = (value) => () => {
        setIsDelete(false)
        dispacth(deleteProduct(value))  
    }
    const popupDelete = (value) => {
        return (
            <div className={isDelete ? 'popup popup-delete' : 'popup popup-delete hiden'}>
                <div className='delete-popup'>
                    <h2>Xóa Sản Phẩm</h2>
                    <p>bạn có muốn xóa sản phẩm</p>
                    <Button type="primary" danger style={{marginRight:20}} onClick={handleDelete(value)} >DELETE</Button>
                    <Button type="error" onClick={() => setIsDelete(false)} >Cancel</Button>
                </div>
            </div>
        )
    }
    
    return (
        <div style={{posision:'relative'}}>
            <Button onClick={() => setIsDelete(!isDelete)}>Delete</Button>
             {popupDelete(record)}
        </div>
    )
}

function ListProduct(props) {
    const dispacth = useDispatch();
    const [isOpen, setIsOpen] = useState(false)
    
    const products = useSelector((store) => store.productReducer.products)

    const handleCancel = () => {
        dispacth(cancel())
        setIsOpen(!isOpen)
    }

    const handleUpdate = (data) => () => {
        dispacth(editProduct(data))
        setIsOpen(true)
    }

    const columns = [
        {
          title: 'Mã sản phẩm',
          dataIndex: 'product_code',
          key: 'product_code',
          render: text => <span>{text}</span>,
        },
        {
          title: 'Tên sản phẩm',
          dataIndex: 'product_name',
          key: 'product_name',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Button onClick={handleUpdate(record)}>Update</Button>
              
              {Delete(record)}
            </Space>
          ),
        },
    ];
    
    useEffect(() => {
        dispacth(getProductList())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            <h2>Test</h2>
            <Product isOpen={isOpen} setIsOpen={handleCancel} />
            <Table dataSource={products} columns={columns} />;
        </div>
    );
}

export default ListProduct;