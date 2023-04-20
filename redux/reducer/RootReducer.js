import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import FoodReducer from "./FoodReducer";
export default RootReducer = combineReducers ({
    UserReducer: UserReducer,
    FoodReducer: FoodReducer
})