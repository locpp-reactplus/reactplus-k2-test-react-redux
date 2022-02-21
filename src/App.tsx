import { useEffect, useState } from "react";
import UserTable from "./components/Table/table";
import { AsyncUserInit } from "./redux/action";
import { Button } from "antd";
import { Container } from "./components/styled/container.styled";
import { ModalAddUser } from "./components/modals/modalAddUser";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AsyncUserInit());
  }, [dispatch]);

  return (
    <div className="App">
      <Container>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Button
            type="primary"
            style={{ margin: "10px 0" }}
            size="large"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            Add
          </Button>
          <h1 style={{ margin: "0" }}>User Table</h1>
        </div>
        <UserTable />
        {isModalVisible && (
          <ModalAddUser
            isModalVisible={isModalVisible}
            handleOk={() => {
              setIsModalVisible(false);
            }}
          />
        )}
      </Container>
    </div>
  );
};

export default App;
