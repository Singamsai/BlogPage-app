import { legacy_createStore, applyMiddleware } from "redux";
import reducer from "./Reducer";
import logger from "redux-logger";

const myStore = legacy_createStore(reducer, applyMiddleware(logger));

export default myStore;
