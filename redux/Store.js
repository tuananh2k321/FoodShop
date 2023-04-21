import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import RootReducer from './reducer/RootReducer'
import RootSaga from './saga/RootSaga'
import CartSaga from './saga/CartSaga'


const sagaMiddleware = createSagaMiddleware();
//Tạo sagaMiddleeware để gọi trong app
//đối sô chuyền vào của  creatStỏe là reducer và state
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);
//sagaMiddleware.run(CartSaga);


export default {
    store,
}
