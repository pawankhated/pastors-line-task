import { ActionType } from "../contains/actionType"

const initialState={
data: []
}
export const DataReducer = (state =initialState ,{type,payload})=>{
switch(type){
    case ActionType.SET_DATA:
        return state;
        default: 
        return state;
}
}