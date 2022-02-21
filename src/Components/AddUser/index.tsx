import { Button, Form, Input, Modal } from "antd";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addUser, changeFormAddUser } from "../../redux/user/userAction";
import { selectIsAdd } from "../../redux/user/userReducer";

const AddUer = () => {
  const [userName, setUserName] = useState("");
  const [userFullName, setUserFullName] = useState("");

  const dispatch = useDispatch();
  const isAdd = useSelector(selectIsAdd);
  const userCodeRef = useRef<any>(null);

  const handleAdd = () => {
    if (userName === "" && userFullName === "") {
      userCodeRef.current?.focus();
    } else {
      dispatch(
        addUser({
          id: uuidv4(),
          username: userName,
          fullname: userFullName,
        })
      );
      setUserName("");
      setUserFullName("");
    }
  };

  return (
    <>
      <Modal
        visible={isAdd}
        title="Thêm User" footer={null}>
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
              ref={userCodeRef}
              onChange={(e) => setUserName(e.target.value)} />
          </Form.Item>

          <Form.Item label="Tên đầy đủ" rules={[{ required: true }]}>
            <Input value={userFullName}
              onChange={(e) => setUserFullName(e.target.value)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit"
              onClick={handleAdd}>
              Submit
            </Button>
            <Button
              type="link"
              onClick={() => dispatch(changeFormAddUser())}>
              Canel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddUer;
