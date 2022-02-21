import Loading from "../../assets/Eclipse-1s-200px.gif";
import { ActionEditUser } from "../../redux/action";
import { Button, Form, Input, Modal } from "antd";
import { EditUser } from "../../axios/axios.request";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { userInterface } from "../../model";

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
  const [loading, setLoading] = useState(false);

  const submitModal = async () => {
    setLoading(true);

    const response = await EditUser(editUser);
    dispatch(ActionEditUser(response));
    setLoading(false);
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
      title="Edit User"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={[
        <Button
          key="cancel"
          onClick={handleCancel}
          style={{ width: "100px", height: "40px" }}
        >
          Cancel
        </Button>,
        <Button
          type="primary"
          key="submit"
          disabled={Boolean(!editUser.name.length || !editUser.fullName.length)}
          onClick={() => {
            !loading && submitModal();
          }}
          style={{ width: "100px", height: "40px" }}
        >
          {loading ? (
            <img
              src={Loading}
              alt="loading"
              style={{ height: "100%", width: "auto" }}
            />
          ) : (
            "Submit"
          )}
        </Button>,
      ]}
    >
      <Form
        name="wrap"
        initialValues={{ name: editUser.name, fullName: editUser.fullName }}
        labelCol={{ flex: "110px" }}
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
      </Form>
    </Modal>
  );
};
