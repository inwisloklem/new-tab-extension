import {ActionType} from 'store/actionTypes'
import {call, put} from 'redux-saga/effects'
import {getTopSites} from 'api'

export function* setTopSitesAsync() {
  const topSites = yield call(getTopSites)
  yield put({
    type: ActionType.SET_TOP_SITES,
    payload: topSites,
  })
}
