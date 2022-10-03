import { combineReducers } from "redux";

import employee_reducer from "./employee_reducer";

export const allReducer = combineReducers({ employee_reducer });
