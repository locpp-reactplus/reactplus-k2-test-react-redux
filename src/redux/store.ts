import { Dispatch } from 'redux';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { dispatch } from "../model";
import rootReducer from "./reducer";


type middleWareActionType = dispatch | ((Dispatch: Dispatch) => dispatch)

const AsyncMiddleWare = (store: any) => (next: Dispatch) => (action: middleWareActionType) => {
  if(typeof action === "function") {
    return action(next);
  }
  return next(action)
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(AsyncMiddleWare)
  )
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
