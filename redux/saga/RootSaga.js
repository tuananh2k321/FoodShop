import {takeEvery, all} from 'redux-saga/effects'
import AppSaga from './AppSaga'
import { cartSaga } from './CartSaga';
export default sagas = function* () {
    

    yield all([
        takeEvery('GET_LIST_USER', AppSaga),
       // cartSaga(),
    ])
}   