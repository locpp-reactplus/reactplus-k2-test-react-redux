import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { dataFomVl, DeleteData, FomData, PostData, PutData } from "../redux/reducer";
import { Input } from 'antd';

const ModalUpdate = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalname, setModaname] = useState();
  const [modalprice, setModanprice] = useState();

  const datafom = useSelector(dataFomVl);
  const dispatch = useDispatch();

  useEffect(()=>{
    setModaname(datafom.name);
    setModanprice(datafom.price);
    // console.log('nap dl fom');
  },[datafom])

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    dispatch(PutData({name : modalname,price :modalprice, id : datafom.id}));
    setVisible(false);
    dispatch(FomData(''));
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        UPDATE
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <h1>Sửa sách</h1>
        Name :
        <Input 
        value={modalname}
        onChange={(e) => setModaname(e.target.value)}
        placeholder="Name" />
        <br />
        Price :
        <Input 
        value={modalprice}
        type="number"
        onChange={(e) => setModanprice(e.target.value)}
        placeholder="price" />
      </Modal>
    </>
  );
};

export default ModalUpdate;
