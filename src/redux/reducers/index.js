import { combineReducers } from "redux";
import { DataReducer } from "./dataReducer";

 const reducers=  combineReducers({
    allData:DataReducer,
})

export default reducers;