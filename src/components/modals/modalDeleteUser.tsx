import Loading from "../../assets/Eclipse-1s-200px.gif";
import { ActionDeleteUser } from "../../redux/action";
import { Button, Modal } from "antd";
import { DeleteUser } from "../../axios/axios.request";
import { useDispatch } from "react-redux";
import { userInterface } from "../../model";
import { useState } from "react";

interface InitialProps {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  user: userInterface;
}

const ModalDeleteUser = ({
  isModalVisible,
  handleCancel,
  handleOk,
  user,
}: InitialProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const submitModal = async () => {
    setLoading(true);
    const response = await DeleteUser(user.id);
    dispatch(ActionDeleteUser(response.id));
    setLoading(false);
    handleOk();
  };
  console.log(user);
  return (
    <Modal
      title="Delete User"
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
      <h3>Delete Users</h3>
      <p>Sure you want to delete {user.fullName}</p>
    </Modal>
  );
};

export default ModalDeleteUser;
