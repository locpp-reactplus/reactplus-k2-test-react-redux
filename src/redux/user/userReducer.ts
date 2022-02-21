import { RootState } from "./../store";
import { AnyAction } from "redux";
import { UserState } from "./interface";
import {
  ADD_USER,
  CHANGE_FORM_ADD_USER,
  CHANGE_FORM_EDIT_USER,
  DELETE_USER,
  EDIT_USER,
  GET_LIST_USER,
  UPDATE_USER,
} from "./userConstant";

const initialState: UserState = {
  users: [],
  isAdd: false,
  currentUser: { id: "", username: "", fullname: "" },
  isEdit: false,
  isDelete: false,
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_LIST_USER:
      return {
        ...state,
        users: [...action.payload],
      };
    case CHANGE_FORM_ADD_USER:
      return {
        ...state,
        isAdd: !state.isAdd,
      };
    case CHANGE_FORM_EDIT_USER:
      return {
        ...state,
        isEdit: !state.isEdit,
      };
    case ADD_USER:
      return {
        ...state,
        isAdd: !state.isAdd,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(
          (user) => user.id !== action.payload.id
        ),
      };
    case EDIT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isEdit: true,
      };
    case UPDATE_USER:
      const users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        console.log(user, 'hihi')
        return user;
      });
      return {
        ...state,
        users: [...users],
        isEdit: false,
      };
    default:
      return state;
  }
};

export const selectUsers = (state: RootState) =>
  state.userReducer.users;
export const selectIsAdd = (state: RootState) => state.userReducer.isAdd;
export const selectCurrentUser = (state: RootState) =>
  state.userReducer.currentUser;
export const selectIsEdit = (state: RootState) => state.userReducer.isEdit;

export default userReducer;
