import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions'
import style from './style.css'

class App extends Component {
  render () {
    const {children} = this.props
    return (
      <div className={style.normal}>
        {children}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
