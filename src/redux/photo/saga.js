import {takeLatest, call, put} from 'redux-saga/effects'
import {Action} from "./redux";
import API from "../../API";

const saga = function* (){
    yield takeLatest(Action.Types.GET_PHOTOS, function* ({data}){
        const result = yield call(API.getPhotos, data)
        console.log("result",result)
        if(result.data){
            yield put(Action.Creators.updateState({
                photos: result.data
            }))
        }
    })
}

export default saga;