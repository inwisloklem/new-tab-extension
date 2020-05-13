import React, {FunctionComponent} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {store} from 'store'
import Page from 'components/Page'

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
