import { Dispatch } from "redux";
import { ActionType } from "./actionType";
import { dispatch, postUser, userInterface } from "../model";
import { GetUser, AddUser, DeleteUser } from "../axios/axios.request";

export const UserInit = (payload: userInterface[]): dispatch => {
  return {
    type: ActionType.USER_INIT,
    payload,
  };
};

export const ActionAddUser = (payload: userInterface): dispatch => {
  return {
    type: ActionType.ADD_USER,
    payload,
  };
};

export const ActionDeleteUser = (payload: string): dispatch => {
  return {
    type: ActionType.DELETE_USER,
    payload,
  };
};

export const ActionEditUser = (payload: userInterface): dispatch => {
  return {
    type: ActionType.EDIT_USER,
    payload,
  };
};

export const AsyncUserInit = () => async (dispatch: Dispatch<dispatch>) => {
  const payload = await GetUser();
  dispatch(UserInit(payload));
};

export const AsyncAddUser =
  (data: postUser) => async (dispatch: Dispatch<dispatch>) => {
    const payload = await AddUser(data);
    dispatch(ActionAddUser(payload));
  };

export const AsyncDeleteUser =
  (id: string) => async (dispatch: Dispatch<dispatch>) => {
    const payload = await DeleteUser(id);
    dispatch(ActionDeleteUser(payload.id));
  };
