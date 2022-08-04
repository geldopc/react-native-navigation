import { combineReducers } from "redux";

import todos from "./todos";
import { reducer } from "./auth";

const rootReducer = combineReducers({
	todos,
	reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default {rootReducer}