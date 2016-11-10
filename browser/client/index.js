import {Router, Route, Redirect, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import ChannelList from './containers/ChannelList'
import EventList from './containers/EventList'
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

import moment from 'moment'
moment.locale('sv')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from='/' to='c/sthlm12nov2016' />

      <Route path='/' component={App}>
        <Route path='c' component={ChannelList} />
        <Route path='c/:idChannel' component={EventList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
