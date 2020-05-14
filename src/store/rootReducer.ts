import {combineReducers} from 'redux'
import {pinnedSitesReducer} from './pinnedSitesReducer'
import {topSitesReducer} from 'store/topSitesReducer'

export const rootReducer = combineReducers({
  pinnedSites: pinnedSitesReducer,
  topSites: topSitesReducer,
})
