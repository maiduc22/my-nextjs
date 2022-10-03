/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ALL_EMPLOYEE,
  GET_ALL_EMPLOYEE_SUCCEED,
  GET_ALL_EMPLOYEE_FAIL,
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_SUCCEED,
  ADD_EMPLOYEE_FAIL,
} from "./action_type";

export default {
  getEmployee: (params, callback) => ({
    type: GET_ALL_EMPLOYEE,
    params,
    callback,
  }),
  getEmployeeSucced: (data, total, callback) => ({
    type: GET_ALL_EMPLOYEE_SUCCEED,
    params: {
      data,
      total,
      callback,
    },
  }),
  getEmployeeFail: (err) => ({
    type: GET_ALL_EMPLOYEE_FAIL,
    err,
  }),
};
