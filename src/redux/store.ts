import { createStore } from "redux";

import {Reducer} from "./reducer"

let store = createStore(Reducer);

store.subscribe(() => console.log(store.getState()));

export default store;
