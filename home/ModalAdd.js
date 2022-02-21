import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { PostData } from "../redux/reducer";
import { Input } from 'antd';

const ModalAdd = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalname, setModaname] = useState();
  const [modalprice, setModanprice] = useState();

  const dispatch = useDispatch();

  console.log(modalname);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    dispatch(PostData({ name: modalname, price: modalprice }));
    setVisible(false);
    setModaname('');
    setModanprice('');
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        ADD
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
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
export default ModalAdd;
