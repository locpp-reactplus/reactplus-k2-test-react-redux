import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const middleware: any[] = [];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware, thunk)
    // other store enhancers if any
  )
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
