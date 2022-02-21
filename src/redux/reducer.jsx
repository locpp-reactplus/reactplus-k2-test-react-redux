import { combineReducers } from "redux";
import userReduce from "./UserReduce";
const rootReducer = combineReducers({
  allUser: userReduce,
});

export default rootReducer;
