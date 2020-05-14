import {TopSite} from 'interfaces/TopSite'
import {applyMiddleware, createStore} from 'redux'
import {rootReducer} from 'store/rootReducer'
import {rootSaga} from 'store/sagas'
import createSagaMiddleware from 'redux-saga'
import loggerMiddleware from 'redux-logger'

export interface AppState {
  pinnedSites: {
    readonly sites: TopSite[]
  }
  topSites: {
    readonly sites: TopSite[]
  }
}

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, sagaMiddleware))

sagaMiddleware.run(rootSaga)
