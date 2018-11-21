import { delay } from 'redux-saga'
import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects'

import API from './api';

const api = API.create();


export function* helloSaga() {
  console.log('Hello Sagas!')
}


// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* fetchData(api, action) {
  console.log('fetchData', action)
   try {
      // const data = yield fetchUser('https://api.github.com/users')
      const response = yield call(api.getLatestStatus)
      console.log(response)
      yield put({type: "FETCH_SUCCEEDED", response})
   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}

export function fetchUser(url) {
  return fetch(url)
    .then(response => {
      console.log(response.ok)
      if (!response.ok) {
        return Promise.reject({
          errCode: response.status,
          errMsg: response.statusText
        });
      }
      return response.json();
    }).then(json => {
      return json
    }).catch((err) => {
      // Toast.info(`请检查您的网络！${err.code}`, 0, null, false);
      if (err instanceof Error) {
        return Promise.reject({
          errCode: err.code || -1,
          errMsg: err.message
        });
      } else if (err != null && typeof err === 'object') { // isObject
        return Promise.reject(err);
      }

      return Promise.reject({
        errCode: -1,
        errMsg: `${err}`
      });
    });
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    takeLatest('FETCH_REQUESTED', fetchData, api)
  ])
}
