import { useState } from "react";
import { call, put } from "redux-saga/effects"

import {getList} from '../../contants/CallAPI'


export default function* (action) {
    

    const list = yield call (getList)
    console.log('App Saga - Action', list)
    console.log('App Saga - Action', action)
    yield put({type: 'GET_LIST_USER_SUCCESS', payLoad: list})
}