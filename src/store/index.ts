import {TopSite} from 'interfaces/TopSite'
import {applyMiddleware, createStore} from 'redux'
import {setTopSitesAsync} from 'store/sagas'
import {rootReducer} from 'store/rootReducer'
import createSagaMiddleware from 'redux-saga'
import loggerMiddleware from 'redux-logger'

export interface AppState {
  topSites: {
    readonly sites: TopSite[]
  }
}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, sagaMiddleware)
)

sagaMiddleware.run(setTopSitesAsync)
