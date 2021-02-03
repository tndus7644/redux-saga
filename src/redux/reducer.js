import {combineReducers} from "redux";
import photoReducer from './photo/redux';

const reducer = combineReducers({
    photo: photoReducer
})

export default reducer;