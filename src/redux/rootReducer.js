import { combineReducers } from "redux";
import todoReducer from "./todoList/todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
