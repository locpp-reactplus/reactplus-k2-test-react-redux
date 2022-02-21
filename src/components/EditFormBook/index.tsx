import React, {useEffect, useState} from "react";
import { Modal } from 'antd';
import 'antd/dist/antd.css';

import "./EditFormBook.css"
import * as BookServices from "../../service/BookServices.ts"
import {useDispatch, useSelector} from "react-redux";

const EditFormBook = (props : any) => {

    const listBooks: any = useSelector((state) => state);
    const dispatch = useDispatch();

    const [name , setName] = useState('');
    const [price , setPrice] = useState(0);

    useEffect(()=>{
        console.log(props.idBook);

        BookServices.getBook(props.idBook)
            .then((res)=>{
                const book = res.data
                setName(book.name);
                setPrice(book.price);
            })
            .catch((err)=>{
                throw err;
            });
    } , [props.idBook])

    const handleEdit = () => {
        console.log(props.idBook);
        BookServices.updateBook(props.idBook , name , price)
            .then((res)=>{
                console.log(res.data);
                dispatch({type: "EDIT_BOOK_ACTION", payload: res.data});
            })
            .catch((err)=>{
                throw err;
            });
        props.handleCancel();
    };

    return (
        <Modal title="Edit Book" visible={props.isModalEdit} onCancel={props.handleCancel} footer={null}
        >
            <div className="form_container" >
                <div className="form_input" >
                    <input placeholder={"Input Name"} value={name}
                           onChange={(e)=> setName(e.target.value) } />
                </div>

                <div className="form_input" >
                    <input placeholder={"Input Price"} value={price}
                           onChange={ (e) => setPrice(Number(e.target.value)) }/>
                </div>

                <div className="form_btn" >
                    <button className="form_save" onClick={handleEdit} > save </button>
                    <button className="form_cancel" onClick={props.handleCancel} > cancel </button>
                </div>
            </div>
        </Modal>
    );
};

export default EditFormBook;
