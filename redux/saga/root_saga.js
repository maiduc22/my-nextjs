import all from "redux-saga/effects";
import watchEmployee from "../saga/employee_saga";

export default function* rootSaga() {
  yield all([watchEmployee()]);
}
