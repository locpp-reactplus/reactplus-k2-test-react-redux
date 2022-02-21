import { Modal } from "antd";
import { Form, Input, Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ActionEditUser, AsyncAddUser } from "../../redux/action";
import { userInterface } from "../../model";
import { EditUser } from "../../axios/axios.request";

interface InitialProps {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  user: userInterface;
}

export const ModalEditUser = ({
  isModalVisible,
  handleOk,
  handleCancel,
  user,
}: InitialProps) => {
  const [editUser, setEditUser] = useState(user);
  const dispatch = useDispatch();

  const modalSubmit = async () => {
    const response = await EditUser(editUser);
    dispatch(ActionEditUser(response));
    handleOk();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEditUser({ ...editUser, [e.target.name]: value });
  };

  useEffect(() => {
    setEditUser(user);
  }, [user]);
  return (
    <Modal
      title="Edit Data"
      visible={isModalVisible}
      onOk={modalSubmit}
      onCancel={handleCancel}
    >
      <Form
        name="wrap"
        initialValues={{ name: editUser.name, fullName: editUser.fullName}}
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        wrapperCol={{ flex: 1 }}
        colon={false}
        onFinish={() => {
          modalSubmit();
        }}
        // onFinishFailed={modalSubmit}
      >
        <Form.Item label="First Name" name="name" rules={[{ required: true }]}>
          <Input
            name="name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true }]}
        >
          <Input
            name="fullName"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
