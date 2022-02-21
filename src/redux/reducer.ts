import { combineReducers } from "redux";
import {  userInterface } from "../model";
import { ActionType } from "./actionType";

// interface userAction {
//   type: string;
//   payload: userInterface | userInterface[] | string;
// };

// if action type is userAction then action.payload.id will cause error because of type userInterface[] and string.
const UserReducer = (state: userInterface[] = [], action: any) => {   
  switch (action.type) {
    case ActionType.USER_INIT:
      return action.payload;
    case ActionType.ADD_USER:
      return [action.payload, ...state];
    case ActionType.DELETE_USER:
      return state.filter((e: userInterface) => e.id !== action.payload);
    case ActionType.EDIT_USER:
      return state.map((e: userInterface) => {
        if(e.id === action.payload.id) {
          e = Object.assign(e, action.payload);
        }
        return e;
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users: UserReducer,
});

export default rootReducer;
