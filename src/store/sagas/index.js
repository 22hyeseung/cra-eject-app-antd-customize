import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  DECREMENT_ASYNC,
} from 'store/modules/counter';

/** worker saga: 비동기 증가 태스크 수행 */
export function* incrementAsync() {
  // yield delay(1000);
  yield call(delay, 1000);
  yield put({ type: INCREMENT });
}

/** watcher saga: 각각의 INCREMENT_ASYNC에 incrementAsync 태스크 생성 */
export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export function* decrementAsync() {
  yield call(delay, 1000);
  yield put({ type: DECREMENT });
}

export function* watchDecrementAsync() {
  yield takeEvery(DECREMENT_ASYNC, decrementAsync);
}

export default function* rootSage() {
  yield all([watchIncrementAsync(), watchDecrementAsync()]);
}
