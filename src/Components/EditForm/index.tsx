import { Button, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUser,
  changeFormEditUser,
} from '../../redux/user/userAction'
import {
  selectCurrentUser,
  selectIsEdit,
} from "../../redux/user/userReducer";

const EditForm = () => {
  const [userName, setUserName] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const isEdit = useSelector(selectIsEdit);

  useEffect(() => {
    setUserName(currentUser.username);
    setUserFullName(currentUser.fullname);
  }, [currentUser]);
  

  const handleSubmit = () => {
    dispatch(
      updateUser({
        id: currentUser.id,
        username: userName,
        fullname: userFullName,
      })
    );
  };
  return (
    <>
      <Modal visible={isEdit} title="Sửa User" footer={null}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item label="Tên" rules={[{ required: true }]}>
            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Tên đầy đủ" rules={[{ required: true }]}>
            <Input
              value={userFullName}
              onChange={(e) => setUserFullName(e.target.value)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Submit
            </Button>
            <Button
              type="link"
              onClick={() => dispatch(changeFormEditUser())}
            >
              Canel
            </Button>
          </Form.Item>
        </Form>
      </Modal>

    </>
  );
};

export default EditForm;
