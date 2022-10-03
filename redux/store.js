import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import rootSaga from "./saga/employee_saga";
import { allReducer } from "./reducer";

const saga = createSagaMiddleware();

const store = createStore(allReducer, applyMiddleware(saga));

saga.run(rootSaga);
