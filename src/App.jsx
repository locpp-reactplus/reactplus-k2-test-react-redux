import React, { useState } from 'react';
import { Modal } from 'antd';

import { ListBook } from './Components/ListBook'
import { AddBookForm } from './Components/AddBookForm'

import 'antd/dist/antd.css'
import './App.css';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div className="App">
      <h1> Books </h1>
      <div className="btn-add">
        <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
          Add New Book
        </button>
      </div>
      <ListBook />
      <Modal title="Add New Book" visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <AddBookForm />
      </Modal>
    </div>
  );
}

export default App;
