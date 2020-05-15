import React, {FunctionComponent} from 'react'
import ReactDOM from 'react-dom'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {persistor} from 'store/configureStore'
import {store} from 'store/configureStore'
import Page from 'components/Page'

const App: FunctionComponent = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Page />
    </PersistGate>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
