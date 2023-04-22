import { useState } from "react";
import { call, put } from "redux-saga/effects"

import {getList} from '../../contants/CallAPI'


/*reate Saga :Sagas là các hàm Generator trong JavaScript 
và chúng giúp xử lý các side effect như gọi API hoặc xử lý async.

-khi Generator funtion được gọi (funtion*) thì nó sẽ dừng lại ở chỗ yield 

*/
export default function* (action) {

    try {
        const list = yield call(getList)
        console.log('App Saga - Action', list)
        console.log('App Saga - Action', action)
        yield put({ type: 'GET_LIST_USER_SUCCESS', payLoad: list })
    } catch (e) {
        yield put({ type: 'GET_LIST_USER_FAILED', message: e.message });
    }
}