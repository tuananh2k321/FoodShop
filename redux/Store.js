import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import RootReducer from './reducer/RootReducer'
import RootSaga from './saga/RootSaga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(RootSaga)

export default {
    store,
}
