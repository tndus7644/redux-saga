import {fork} from "redux-saga/effects";
import photoSaga from './photo/saga';

const sagas = function* (){
    yield fork(photoSaga)
}

export default sagas;