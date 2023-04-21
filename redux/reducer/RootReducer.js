import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

import CartReducer from "./CartReducer";


//vì creatStore có đối số chuyền vào là 1 reducer 
export default RootReducer = combineReducers ({
    UserReducer: UserReducer ,
    CartReducer : CartReducer

import FoodReducer from "./FoodReducer";
export default RootReducer = combineReducers ({
    UserReducer: UserReducer,
    FoodReducer: FoodReducer

})