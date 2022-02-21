import { Input, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/todoList/todoAction";
import "./TodoForm.scss";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  isEdit: PropTypes.bool,
};

function TodoForm({ isEdit = false }) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const todoList = useSelector((state) => state.todo.todoList);
  const isAdd = useSelector((state) => state.todo.isAdd);
  const todoUpdate = useSelector((state) => state.todo.todoUpdated);

  const dispatch = useDispatch();

  const inputValueRef = useRef();

  useEffect(() => {
    setCode(todoUpdate.product_code);
    setName(todoUpdate.product_name);
  }, [todoUpdate]);

  const handleChangeCode = (e) => {
    setCode(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdd) {
      if (code !== "" && name !== "") {
        const formValues = {
          id: todoList.length + 1,
          product_code: code,
          product_name: name,
        };
        dispatch(action.addTodo(formValues));
        setCode("");
        setName("");
        inputValueRef.current.focus();
      } else {
        inputValueRef.current.focus();
      }
    } else {
      const updateTodo = {
        id: todoUpdate.id,
        product_code: code,
        product_name: name,
      };
      dispatch(action.updateTodo(updateTodo));
      setCode("");
      setName("");
    }
    setIsModalVisible(false);
  };
  console.log(isAdd);
  const showModal = () => {
    if (isAdd) {
      setIsModalVisible(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <button onClick={showModal}>ADD PRODUCT</button>

      <Modal
        visible={isAdd ? isModalVisible : isEdit}
        onOk={handleSubmit}
        onCancel={handleCancel}
        okText={isAdd ? "Add" : "Update"}
      >
        <form className="todo-form">
          <div>
            <Input
              ref={inputValueRef}
              value={code}
              onChange={handleChangeCode}
              type="text"
              placeholder="Code"
              style={{ width: "80%" }}
            />
          </div>
          <div>
            <Input
              ref={inputValueRef}
              value={name}
              onChange={handleChangeName}
              type="text"
              placeholder="Name"
              style={{ width: "80%" }}
            />
          </div>
        </form>
      </Modal>
    </>
  );
}

export default TodoForm;
