import { Modal } from "antd";
import { Form, Input, Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddUser } from "../../axios/axios.request";
import { ActionAddUser } from "../../redux/action";
import Loading from "../../assets/Eclipse-1s-200px.gif";
interface InitialProps {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export const ModalAddUser = ({
  isModalVisible,
  handleOk,
  handleCancel,
}: InitialProps) => {
  const [user, setUser] = useState({ name: "", fullName: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const submitModal = async () => {
    setLoading(true);
    const response = await AddUser(user);
    dispatch(ActionAddUser(response));
    setLoading(false);
    closeModal();
  };

  const closeModal = () => {
    setUser({ name: "", fullName: "" });
    handleOk();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  return (
    <Modal
      title="Add New User"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={() => {
        closeModal();
      }}
    >
      <Form
        name="wrap"
        labelCol={{ flex: "110px" }}
        initialValues={{ name: user.name, fullName: user.fullName }}
        labelAlign="left"
        wrapperCol={{ flex: 1 }}
        colon={false}
        onFinish={() => {
          submitModal();
        }}
        // onFinishFailed={submitModal}
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
        <Form.Item label=" ">
          <Button type="primary" htmlType="submit" style={{width: "100px", height: "40px"}}>
            {loading ? <img src={Loading} alt="loading" style={{height: "100%", width: "auto"}} /> : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
