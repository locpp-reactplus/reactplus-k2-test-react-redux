import React from "react";
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import AddBookForm from "../AddBookForm";

const DeleteDialog = (props : any) => {
    return (
        <Modal title="Delete Book" visible={props.isModalVisible} onCancel={props.handleCancel} footer={null}
        >
            <div>
                <h1> Are you sure delete ? </h1>
                <button onClick={()=> { props.handleDelete(props.idBook) }}
                style={{marginRight : 20}}
                > Delete </button>
                <button onClick={props.handleCancel} > Cancel </button>
            </div>
        </Modal>
    );
};

export default DeleteDialog;
