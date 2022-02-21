import * as actionTypes from "./types";

export const addTodo = (payload) => {
  return {
    type: actionTypes.ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: actionTypes.REMOVE_TODO,
    payload,
  };
};

export const editTodo = (payload) => {
  return {
    type: actionTypes.EDIT_TODO,
    payload,
  };
};
export const updateTodo = (payload) => {
  return {
    type: actionTypes.UPDATE_TODO,
    payload,
  };
};
