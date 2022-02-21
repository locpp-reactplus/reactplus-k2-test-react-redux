import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import "./ListBooks.css"
import * as BookServices from "../../service/BookServices.ts"
import {Book} from "../../types"
import DeleteDialog from "../DeleteDialog/index"
import EditFormBook from "../EditFormBook/index"

const ListBooks = () => {
    const listBooks: any = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        BookServices.getAllBooks()
            .then((res) => {
                // console.log(res.data);
                // setListBooks(res.data);
                dispatch({type: "GET_ALL_BOOK_ACTION", payload: res.data});
            })
            .catch((error) => {
                throw error;
            })
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [idEdit, setIdEdit] = useState('');
    const [idDelete, setIdDelete] = useState('');

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleDelete = (id:string) => {
        BookServices.removeBook(id)
            .then((res) => {
                console.log(res.data);
                dispatch({type: "DELETE_BOOK_ACTION", payload: res.data});
                setIsModalVisible(false);
            })
            .catch((err) => {
                throw err;
            });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <table id="customers">
                <tr>
                    <th> Tên Sách</th>
                    <th> Giá</th>
                    <th></th>
                </tr>
                {listBooks.map((book: Book, index: number) => {
                    return <tr key={index}>
                        <td> {book.name} </td>
                        <td> {book.price} </td>
                        <td>
                            <button onClick={()=>{
                                setIdEdit(book.id);
                                setIsModalEdit(true);
                            }} > Edit </button>

                            <button onClick={() => {
                                setIdDelete(book.id);
                                showModal();
                            }}> Delete
                            </button>

                        </td>
                    </tr>
                })}

            </table>
            <EditFormBook idBook={idEdit}
                          isModalEdit={isModalEdit} handleCancel={()=>(setIsModalEdit(false))}
            />

            <DeleteDialog isModalVisible={isModalVisible} showModal={showModal} handleCancel={handleCancel}
                          handleDelete={handleDelete} idBook={idDelete} />
        </div>
    );
}

export default ListBooks;
