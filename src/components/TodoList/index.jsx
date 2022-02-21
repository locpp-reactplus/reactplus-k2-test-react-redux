import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/todoList/todoAction";
import TodoForm from "../TodoForm";
import "./TodoList.scss";

TodoList.propTypes = {};

function TodoList(props) {
  const [isEdit, setIsEdit] = useState(false);

  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(action.removeTodo(id));
  };
  const handleEdit = (todo) => {
    dispatch(action.editTodo(todo));
    setIsEdit(true);
  };

  return (
    <div className="todo-list">
      <h1>TODO List</h1>
      <TodoForm isEdit={isEdit} />
      <table>
        <tr>
          <th>Ma SP</th>
          <th>Ten San Pham</th>
          <th></th>
        </tr>
        {todoList.map((todo) => (
          <tr key={todo.product_code}>
            <td>{todo.product_code}</td>
            <td>{todo.product_name}</td>
            <td className="todo-action">
              <button onClick={() => handleDelete(todo.id)}>DELETE</button>
              <button onClick={() => handleEdit(todo)}>EDIT</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default TodoList;
