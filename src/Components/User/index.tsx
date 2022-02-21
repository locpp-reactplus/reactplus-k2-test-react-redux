import { Button, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ColumnsType } from "antd/es/table";
import { deleteUser, editUser, changeFormAddUser } from "../../redux/user/userAction";
import { selectIsAdd, selectUsers } from "../../redux/user/userReducer";
import { IUserItem } from "../../redux/user/interface";


const User = () => {
  const dispatch = useDispatch();
  const isAdd = useSelector(selectIsAdd);
  const users = useSelector(selectUsers);
  console.log(`users`, users);

  const columns: ColumnsType<IUserItem> = [
    {
      title: "Tên",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Tên đầy đủ",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      key: "actions",
      render: (_, user: IUserItem) => {
        return (
          <>
            <Button type="primary" onClick={() => dispatch(editUser(user))}>
              Sửa
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => dispatch(deleteUser(user.id))}>
              Xóa
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div>
      {!isAdd && (
        <Button type="primary" onClick={() => dispatch(changeFormAddUser())}>
          ADD
        </Button>
      )} 
      <Table
        rowKey={"id"}
        dataSource={users}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default User;
