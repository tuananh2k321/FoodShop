import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import FoodReducer from "./FoodReducer";


//vì creatStore có đối số chuyền vào là 1 reducer 


//vì creatStore có đối số chuyền vào là 1 reducer 

export default RootReducer = combineReducers ({
    UserReducer: UserReducer,
    FoodReducer: FoodReducer,

})