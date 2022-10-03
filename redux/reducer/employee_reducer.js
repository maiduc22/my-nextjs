/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ALL_EMPLOYEE,
  GET_ALL_EMPLOYEE_SUCCEED,
  GET_ALL_EMPLOYEE_FAIL,
} from "../action/employee/action_type";

const initialState = {
  employee: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EMPLOYEE_SUCCEED:
      return {
        ...state,
        employee: action.params.data,
      };
    default:
      return state;
  }
};
