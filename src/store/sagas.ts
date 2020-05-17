import {Action} from 'store/actions'
import {ActionType} from 'store/actionTypes'
import {TopSite} from 'interfaces/TopSite'
import {REHYDRATE} from 'redux-persist/lib/constants'
import {all, call, put, select, take, takeEvery} from 'redux-saga/effects'
import {getTopSites} from 'api'
import {pinnedSitesSelector} from 'store/pinnedSitesSelector'

export function* moveSiteFromPinnedSitesToTopSites(action: Action) {
  yield put({
    type: ActionType.REMOVE_SITE_FROM_PINNED_SITES,
    payload: action.payload,
  })
  yield put({type: ActionType.SET_DIFFERENCE_TO_TOP_SITES})
}

export function* moveSiteFromTopSitesToPinnedSites(action: Action) {
  yield put({
    type: ActionType.ADD_SITE_TO_PINNED_SITES,
    payload: action.payload,
  })
  yield put({type: ActionType.SET_DIFFERENCE_TO_TOP_SITES})
}

export function* setDifferenceToTopSites() {
  const pinnedSites: TopSite[] = yield select(pinnedSitesSelector)
  const topSites: TopSite[] = yield call(getTopSites)
  const difference = topSites.filter(
    topSite => !pinnedSites.find(pinnedSite => pinnedSite.url === topSite.url)
  )
  yield put({
    type: ActionType.SET_TOP_SITES,
    payload: difference,
  })
}

export function* rootSaga() {
  yield take(REHYDRATE)
  yield call(setDifferenceToTopSites)
  yield all([
    takeEvery(ActionType.MOVE_PINNED_SITE_TO_TOP_SITES, moveSiteFromPinnedSitesToTopSites),
    takeEvery(ActionType.MOVE_TOP_SITE_TO_PINNED_SITES, moveSiteFromTopSitesToPinnedSites),
    takeEvery(ActionType.SET_DIFFERENCE_TO_TOP_SITES, setDifferenceToTopSites),
  ])
}
