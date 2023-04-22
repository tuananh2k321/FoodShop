import { call, put } from "redux-saga/effects"

import { getListFoodFish, getListFoodFruits,
     getListFoodMeat, getListFoodVegetable} from '../../contants/CallAPI'


export default function* (action) {
    
    const listFruit = yield call (getListFoodFruits)
    const listMeat = yield call (getListFoodMeat)
    const listFish = yield call (getListFoodFish)
    const listVegetable = yield call (getListFoodVegetable)
    
    // console.log('App Saga - Action', action)
    // console.log('listFruit: ', listFruit)
    // console.log('listMeat: ', listMeat)
    // console.log('listFish: ', listFish)
    // console.log('listVegetable: ', listVegetable)
    
    yield put({type: 'GET_LIST_FOOD_FRUIT_SUCCESS', payLoad: listFruit})
    yield put({type: 'GET_LIST_FOOD_MEAT_SUCCESS', payLoad: listMeat})
    yield put({type: 'GET_LIST_FOOD_FISH_SUCCESS', payLoad: listFish})
    yield put({type: 'GET_LIST_FOOD_VEGETABLE_SUCCESS', payLoad: listVegetable})
}