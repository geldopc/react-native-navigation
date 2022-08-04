import { applyMiddleware, createStore } from "redux";
import { expoLogger } from "expo-redux-logger";
import reducers from "../reducers";

const store = createStore(reducers.rootReducer, applyMiddleware(expoLogger));

export default store;
