import {takeEvery, all} from 'redux-saga/effects'
import AppSaga from './AppSaga'

export default sagas = function* () {
    

    yield all([
        takeEvery('GET_LIST_USER', AppSaga)
    ])
}