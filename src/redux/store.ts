import { createStore, applyMiddleware, MiddlewareAPI, Dispatch } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { dispatch } from "../model";
import rootReducer from "./reducer";


const AsyncMiddleWare = (store: any) => (next: any) => (action: any) => {
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
