import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../../axios/axios.request";
import { userInterface } from "../../model";
import { ActionDeleteUser, AsyncDeleteUser } from "../../redux/action";

interface InitialProps {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  user: userInterface
}

const ModalDeleteUser = ({
  isModalVisible,
  handleCancel,
  handleOk,
  user
}: InitialProps) => {
  const dispatch = useDispatch();

  const modalSubmit = async() => {
    const response = await DeleteUser(user.id);
    dispatch(ActionDeleteUser(response.id));
    handleOk()
  };
console.log(user)
  return (
    <Modal
      title="Delete User"
      visible={isModalVisible}
      onOk={modalSubmit}
      onCancel={handleCancel}
    >
      <h3>Delete Users</h3>
      <p>Sure you want to delete {user.fullName}</p>
    </Modal>
  );
};

export default ModalDeleteUser
