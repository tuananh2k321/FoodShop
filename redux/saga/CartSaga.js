// import { put, takeLatest } from 'redux-saga/effects';
// import { ADD_TO_CART, REMOVE_FROM_CART } from '../const/index';

// function* addToCart(action) {
//   try {
//     // Thực hiện các side effect để thêm sản phẩm vào giỏ hàng
//     yield put({ type: ADD_TO_CART, payload: action.payload });
//   } catch (e) {
//     // Xử lý lỗi nếu có
//   }
// }

// function* removeFromCart(action) {
//   try {
//     // Thực hiện các side effect để xóa sản phẩm khỏi giỏ hàng
//     yield put({ type: REMOVE_FROM_CART, payload: action.payload });
//   } catch (e) {
//     // Xử lý lỗi nếu có
//   }
// }

// export function* cartSaga() {
//   yield takeLatest(ADD_TO_CART, addToCart);
//   yield takeLatest(REMOVE_FROM_CART, removeFromCart);
// }