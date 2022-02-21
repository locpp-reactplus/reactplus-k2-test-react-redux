import { Button } from "antd";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import UserTable from "./components/Table/table";
import { Container } from "./components/styled/container.styled";
import { useDispatch } from "react-redux";
import { AsyncUserInit } from "./redux/action";
import { ModalAddUser } from "./components/modals/modalAddUser";
const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AsyncUserInit());
  }, []);

  return (
    <div className="App">
      <Container>
        <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
        <Button
          type="primary"
          style={{margin: "10px 0"}}
          size="large"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Add
        </Button>
        <h1 style={{margin: '0'}}>Welcome to server</h1>

        </div>
        <UserTable />
        {isModalVisible && (
          <ModalAddUser
            isModalVisible={isModalVisible}
            handleOk={() => {
              setIsModalVisible(false);
            }}
            handleCancel={() => {
              setIsModalVisible(false);
            }}
          />
        )}
      </Container>
    </div>
  );
};

export default App;
