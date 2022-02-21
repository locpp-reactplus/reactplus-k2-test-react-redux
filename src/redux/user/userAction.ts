import UserAPI from "../../api/userAPI";
import { IUserItem } from "./interface";
import {
  ADD_USER,
  CHANGE_FORM_ADD_USER,
  CHANGE_FORM_EDIT_USER,
  DELETE_USER,
  EDIT_USER,
  GET_LIST_USER,
  UPDATE_USER,
} from "./userConstant";

const changeFormAddUser = () => {
  return {
    type: CHANGE_FORM_ADD_USER,
  };
};
const changeFormEditUser = () => {
  return {
    type: CHANGE_FORM_EDIT_USER,
  };
};
const editUser = (payload: IUserItem) => {
  return {
    type: EDIT_USER,
    payload,
  };
};

//

const getListUser = () => {
  return async (dispatch: any) => {
    const { data } = await UserAPI.getAll();
    dispatch({
      type: GET_LIST_USER,
      payload: data,
    });
  };
};

const addUser = (itemUser: IUserItem) => {
  return async (dispatch: any) => {
    const { data } = await UserAPI.addUser(itemUser);
    dispatch({
      type: ADD_USER,
      payload: data,
    });
  };
};

const deleteUser = (id: string) => {
  return async (dispatch: any) => {
    const { data } = await UserAPI.deleteUser(id);
    dispatch({
      type: DELETE_USER,
      payload: data,
    });
  };
};
const updateUser = (itemUser: IUserItem) => {
  return async (dispatch: any) => {
    const { data } = await UserAPI.updateUser(itemUser);
    dispatch({
      type: UPDATE_USER,
      payload: data,
    });
  };
};

export {
  getListUser,
  changeFormAddUser,
  addUser,
  deleteUser,
  editUser,
  updateUser,
  changeFormEditUser,
};
