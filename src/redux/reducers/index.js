import { combineReducers } from "redux";
import userReducer from './Users';
import houseReducer from './Houses'
import profileReducer from './Profile'



export default combineReducers({
    user: userReducer,
    houses: houseReducer,
    profiles:profileReducer,
});