import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import sagas from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagas)

export default store;