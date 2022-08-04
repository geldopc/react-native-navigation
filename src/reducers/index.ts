import { combineReducers } from "redux";

import todos from "./todos";
import { reducer as AuthReducer } from "./auth";

const rootReducer = combineReducers({
  todos,
  AuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default { rootReducer };
