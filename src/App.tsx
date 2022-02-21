import React,{useState} from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";

import ListBooks from "./components/ListBooks/index";
import AddBookForm from "./components/AddBookForm/index"
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';


const App: React.FC = () => {

    const stateTodo :any = useSelector((state) => state);
    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isUpdate , setIsUpdate] = useState(true);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

  return (
    <div className="App">
        <h1> List Books </h1>

        <Button type="primary" onClick={showModal}>
            Open Modal
        </Button>

        <ListBooks />


        <Modal title="Add Book" visible={isModalVisible} footer={null} onCancel={handleCancel}>
            <AddBookForm showModal={showModal} handleCancel={handleCancel} />
        </Modal>
    </div>
  );
}

export default App;
