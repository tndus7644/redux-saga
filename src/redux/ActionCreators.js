import store from "./store";
import {bindActionCreators} from "redux";
import {Action as PhotoAction} from './photo/redux';

const {dispatch} = store;

export const photoActions = bindActionCreators(PhotoAction.Creators, dispatch);