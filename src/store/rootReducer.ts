import {combineReducers} from 'redux'
import {localStorage} from 'redux-persist-webextension-storage'
import {persistReducer} from 'redux-persist'
import {pinnedSitesReducer} from './pinnedSitesReducer'
import {topSitesReducer} from 'store/topSitesReducer'

const localStorageConfig = {
  key: 'localStorage',
  storage: localStorage,
}

export const rootReducer = combineReducers({
  pinnedSites: persistReducer(localStorageConfig, pinnedSitesReducer),
  topSites: topSitesReducer,
})
