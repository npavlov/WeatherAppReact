import { createStore, applyMiddleware, compose } from "redux";
import rootSaga from "../sagas";
import rootReducer from "../reducers";

import createSagaMiddleware from "redux-saga";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
