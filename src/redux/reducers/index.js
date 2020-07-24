import { combineReducers } from "redux";
import userReducer from './Users';
import houseReducer from './Houses'
import profileReducer from './Profile'
import authorizationReducer from './Authorization'



export default combineReducers({
    user: userReducer,
    houses: houseReducer,
    profiles:profileReducer,
    authorization:authorizationReducer,
});