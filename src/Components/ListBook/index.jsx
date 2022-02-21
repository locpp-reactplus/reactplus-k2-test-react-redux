import { Modal, Input, Button } from 'antd';
import './Listbook.css'
import React, { useState, useEffect } from "react";
import { getBook, deleteBook, putBook } from '../../Api/Api'

export const ListBook = () => {

    const [book, setBook] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [id, setId] = useState('')
    const [reload, setReload] = useState(1)
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Modal
    const handleOpenModal = (item) => {
        setIsModalVisible(true)
        setId(item.id)
    }

    const handleCancel = async() => {
        await setReload(prev => prev + 1)
        setIsModalVisible(false)
    }

    // Get
    const callGetBook = async () => {
        const response = await getBook();
        console.log("data", response.data)
        setBook(response.data)
    }

    // Delete
    const onDelete = async (item) => {
        await deleteBook(item.id)
        setReload(prev => prev + 1)
    }

    // Edit
    const onChange = async () => {
        await putBook(id, { book_name: name, book_price: price })
        setIsModalVisible(false)
    }

    useEffect(() => {
        callGetBook()
    }, [reload,isModalVisible])

    return <div className="ant-list-items">
        <div>
            <div className="item-title">
                <div className="ids">
                    <h3>ID</h3>
                </div>
                <div className="contents">
                    <h3>Book Name</h3>
                </div>
                <div className="buttons"></div>
            </div>
            {book.map((item, index) => (
                index % 2 !== 0 ? (
                    <div key={item.id} className="ant-list-item-meta">
                        <div className="ant-list-item-meta-avatar">
                            <h3>{item.id}</h3>
                        </div>
                        <div className="ant-list-item-meta-content">
                            <h2 className="ant-list-item-meta-title">
                                {item.book_name}
                            </h2>
                            <div className="ant-list-item-meta-description">
                                price: {item.book_price}
                            </div>
                        </div>
                        <ul className="ant-list-item-action">
                            <Button onClick={() => handleOpenModal(item)} className="ant-list-item-btn">
                                Edit
                            </Button>
                            <Button onClick={() => onDelete(item)} className="ant-list-item-btn">
                                Remove
                            </Button>
                        </ul>
                    </div>
                )
                    :
                    (
                        <div key={item.id} className="ant-list-item-meta  b-color">
                            <div className="ant-list-item-meta-avatar">
                                <h3>{item.id}</h3>
                            </div>
                            <div className="ant-list-item-meta-content">
                                <h2 className="ant-list-item-meta-title">
                                    {item.book_name}
                                </h2>
                                <div className="ant-list-item-meta-description">
                                    price: {item.book_price}
                                </div>
                            </div>
                            <ul className="ant-list-item-action">
                                <Button onClick={() => handleOpenModal(item)} className="ant-list-item-btn">
                                    Edit
                                </Button>
                                <Button onClick={() => onDelete(item)} className="ant-list-item-btn">
                                    Remove
                                </Button>
                            </ul>
                        </div>
                    )
            ))}
        </div>
        <Modal title="Edit Book" visible={isModalVisible} footer={null} onCancel={handleCancel}>
            <div>
                <div className="input-text">
                    <Input onChange={(e) => setPrice(e.target.value)} placeholder="Book Price" type="text" className="ant-input" />
                </div>
                <div className="input-text">
                    <Input onChange={(e) => setName(e.target.value)} placeholder="Book Name" type="text" className="ant-input" />
                </div>
                <div className="div-button">
                    <Button onClick={() => onChange()} className="ant-btn ant-btn-primary">
                        Edit Book
                    </Button>
                </div>
            </div>
        </Modal>
    </div>
}