import React,{ useState } from "react";
import { Button, Input } from 'antd';
import {postBook} from '../../Api/Api'
import './Addbook.css'

export const AddBookForm = () => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    //Add
    const onAdd =  () => {
        postBook({book_name: name, book_price:price})
    }

    

    return <div>
        <div>
            <div className="input-text">
                <Input onChange={(e)=> setName(e.target.value)} placeholder="Book Name" type="text" className="ant-input" />
            </div>
            <div className="input-text">
                <Input onChange={(e)=> setPrice(e.target.value)} placeholder="Book Price" type="text" className="ant-input" />
            </div>
            <div className="div-button">
                <Button onClick={onAdd} className="ant-btn ant-btn-primary">
                    Add New Book 
                </Button>
            </div>
        </div>
        
    </div>
}
