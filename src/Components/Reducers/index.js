import { combineReducers } from "redux";
import { CheckStatusReducer } from "./CheckStatusReducer";
import { FetchDataReducer } from "./FetchDataReducer";

export const Reducers = combineReducers ({
    checkStatus : CheckStatusReducer,
    getFetchData : FetchDataReducer
})