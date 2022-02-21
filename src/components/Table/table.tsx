import { Table, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { userInterface } from "../../model";
import { Button } from "antd";
import { AsyncDeleteUser } from "../../redux/action";
import React, { useState } from "react";
import ModalDeleteUser from "../modals/modalDeleteUser";
import { ModalEditUser } from "../modals/modalEditUser";
import { useEffect } from "react";

const InitialModalPropsOption = {
  isDeleteModalVisible: false,
  isEditModalVisible: false,
  user: {
    id: "",
    name: "",
    fullName: "",
  },
};

const UserTable = () => {
  const users = useSelector((store: any) => store.users);
  const dispatch = useDispatch();
  const [modalPropsOption, setModalPropsOption] = useState(
    InitialModalPropsOption
  );
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      id: "name",
      width: '40%',
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      id: "fullName",
      width: '40%',

    },
    {
      title: "Action",
      id: "action",
      width: '20%',

      render: (data: userInterface) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              onClick={() => {
                setModalPropsOption({
                  ...modalPropsOption,
                  isEditModalVisible: true,
                  user: { ...data },
                });
              }}
            >
              Edit
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                setModalPropsOption({
                  ...modalPropsOption,
                  isDeleteModalVisible: true,
                  user: { ...data },
                });
              }}
            >
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  useEffect(() => {}, [modalPropsOption]);
  return (
    <React.Fragment>
      <Table
        style={{ width: "100%" }}
        columns={columns}
        dataSource={users}
        rowKey="id"
      />
      {modalPropsOption.isDeleteModalVisible && (
        <ModalDeleteUser
          user={modalPropsOption.user}
          isModalVisible={modalPropsOption.isDeleteModalVisible}
          handleCancel={() => setModalPropsOption(InitialModalPropsOption)}
          handleOk={() => setModalPropsOption(InitialModalPropsOption)}
        />
      )}
      {modalPropsOption.isEditModalVisible && (
        <ModalEditUser
          user={modalPropsOption.user}
          isModalVisible={modalPropsOption.isEditModalVisible}
          handleCancel={() => setModalPropsOption(InitialModalPropsOption)}
          handleOk={() => setModalPropsOption(InitialModalPropsOption)}
        />
      )}
    </React.Fragment>
  );
};

export default UserTable;
