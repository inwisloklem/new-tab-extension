import {Action} from 'store/actions'
import {ActionType} from 'store/actionTypes'
import {all, call, put, takeEvery} from 'redux-saga/effects'
import {getTopSites} from 'api'

export function* moveSiteFromTopSitesToPinnedSites(action: Action) {
  yield put({
    type: ActionType.ADD_SITE_TO_PINNED_SITES,
    payload: action.payload,
  })
  yield put({
    type: ActionType.REMOVE_SITE_FROM_TOP_SITES,
    payload: action.payload,
  })
}

export function* setTopSitesAsync() {
  const topSites = yield call(getTopSites)
  yield put({
    type: ActionType.SET_TOP_SITES,
    payload: topSites,
  })
}

export function* rootSaga() {
  yield all([
    call(setTopSitesAsync),
    takeEvery(
      ActionType.MOVE_SITE_FROM_TOP_SITES_TO_PINNED_SITES,
      moveSiteFromTopSitesToPinnedSites
    ),
  ])
}
