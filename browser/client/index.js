import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import Channels from './containers/Channels'
import configure from './store'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <Route path='channels' component={Channels} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)