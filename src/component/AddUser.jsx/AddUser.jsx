import React from "react";
import "./Adduser.scss";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Add } from "../../redux/action";

const AddUser = ({ Openadd }) => {
  const [fullName, setFullName] = useState("");
  const [name, setName] = useState("");
  const [list, setList] = useState({ id: "", fullName: "", name: "" });

  useEffect(() => {
    setList({ id: "", fullName: fullName, name: name });
  }, [name, fullName]);

  const Name = (e) => {
    setName(e.target.value);
  };

  const FullName = (e) => {
    setFullName(e.target.value);
  };
  const dispatch = useDispatch();

  const addUser = () => {
    dispatch(Add(list));
    setName("");
    setFullName("");
    Openadd();
  };
  console.log(list);
  return (
    <div className="addUser">
      <div className="header_add">Thêm User</div>
      <div>
        UserName
        <input type="text" value={name} onChange={Name} />
      </div>
      <div>
        Full Name
        <input type="text" value={fullName} onChange={FullName} />
      </div>
      <div className="add">
        <button onClick={addUser}>Add</button>
        <button>Calcer</button>
      </div>
    </div>
  );
};

export default AddUser;
