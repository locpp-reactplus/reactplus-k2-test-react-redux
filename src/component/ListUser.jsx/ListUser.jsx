import React from "react";
import "./ListUser.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../redux/action";

const ListUser = ({ UpdateUser, setCancel, OpenCancel }) => {
  const dispatch = useDispatch();

  const listUser = useSelector((state) => state.allUser.ListUser);
  useEffect(() => {
    dispatch(GetUser());
  }, []);

  const DeleteUser = (id) => {
    OpenCancel();
    setCancel(id);
  };
  const Update = (item) => {
    UpdateUser(item);
  };
  return (
    <div className="ListUser_app">
      <div>
        <table className="ListUser">
          <tr>
            <th>UserName</th>
            <th>Full Name</th>
            <th></th>
          </tr>
          {listUser.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.fullName}</td>
              <td className="Edit">
                <button onClick={() => Update(item)}>Update</button>
                <button onClick={() => DeleteUser(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ListUser;
