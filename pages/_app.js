import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import rootSaga from "../redux/saga/root_saga";
import { allReducer } from "../redux/reducer";

const saga = createSagaMiddleware();

const store = createStore(allReducer, applyMiddleware(saga));
console.log(store);

saga.run(rootSaga);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
