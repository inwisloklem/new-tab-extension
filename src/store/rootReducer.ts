import {combineReducers} from 'redux'
import {topSitesReducer} from 'store/topSitesReducer'

export const rootReducer = combineReducers({
  topSites: topSitesReducer,
})
