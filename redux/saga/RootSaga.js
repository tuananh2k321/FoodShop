import {takeEvery, all} from 'redux-saga/effects'
import AppSaga from './AppSaga'
import FoodSaga from './FoodSaga'

export default sagas = function* () {
    

    yield all([
        takeEvery('GET_LIST_USER', AppSaga),
        takeEvery('GET_LIST_FOOD', FoodSaga)
    ])
}