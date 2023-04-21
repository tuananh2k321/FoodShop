import { call, put } from "redux-saga/effects"

import {getList, getListFoodFruits} from '../../contants/CallAPI'


export default function* (action) {
    
    const list = yield call (getListFoodFruits)
    console.log('App Saga - Action', list)
    console.log('App Saga - Action', action)
    yield put({type: 'GET_LIST_FOOD_SUCCESS', payLoad: list})

}