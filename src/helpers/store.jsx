import Reducer from "../reducers/Reducer";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
const store = createStore(Reducer, applyMiddleware(thunkMiddleware));
export default store;