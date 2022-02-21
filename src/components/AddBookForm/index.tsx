import React, {useState} from 'react';
import "./AddBookForm.css"

import * as BookServices from "../../service/BookServices.ts"
import {useDispatch, useSelector} from "react-redux";

const AddBookForm = (props : any) => {
    const listBooks :any = useSelector((state) => state);
    const dispatch = useDispatch();

    const [name , setName] = useState('');
    const [price , setPrice] = useState(0);

    const handleClick = () => {
        BookServices.addBook(name , price)
            .then( (res) => {
                console.log(res.data);
                dispatch({type : "ADD_BOOK_ACTION" , payload : res.data});
                props.handleCancel();
            })
            .catch( (err) => {
                throw err
            });
    };

    return(
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
            <button className="form_save" onClick={handleClick} > save </button>
            <button className="form_cancel" onClick={props.handleCancel} > cancel </button>
        </div>
    </div>);
}

export default AddBookForm;
