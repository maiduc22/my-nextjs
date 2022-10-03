import {
  all,
  call,
  delay,
  fork,
  put,
  take,
  takeLatest,
} from "redux-saga/effects";
import { isFunction } from "lodash";
import { GET_ALL_EMPLOYEE } from "../action/employee/action_type";
import actions from "../action/employee/index";

function* getEmployee(action) {
  try {
    // const {data, total} = yield call(() => fet)
    const { res } = yield call(fetch("http://localhost:8080/employees"));
    const data = res.json();
    console.log(data);
    // if (isFunction(action.callback)) {
    //   yield action.callback();
    // }
    yield put(actions.getEmployeeSucced(data));
  } catch (err) {
    yield put(actions.getEmployeeFail(err));
  }
}

function* watchEmployee() {
  yield takeLatest(GET_ALL_EMPLOYEE, getEmployee);
}

export default function* rootSaga() {
  yield all([fork(watchEmployee)]);
}
