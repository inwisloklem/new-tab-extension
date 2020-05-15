import {applyMiddleware, createStore} from 'redux'
import {persistStore} from 'redux-persist'
import {rootReducer} from 'store/rootReducer'
import {rootSaga} from 'store/sagas'
import createSagaMiddleware from 'redux-saga'
import loggerMiddleware from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, sagaMiddleware))
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
