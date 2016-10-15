import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions'
import socket from 'socket'
import Event from 'components/Event'

class EventList extends Component {
  componentDidMount () {
    const {actions} = this.props

    socket.on('events', function (event) {
      actions.addEvent(event)
    })
  }

  componentWillUnmount () {
    socket.off('events')
  }

  render () {
    const events = this.props.events.map((event, index) => {
      return <Event key={index} {...event} />
    })

    return (
      <ol>
        {events}
      </ol>
    )
  }
}

function mapStateToProps (state) {
  return {
    events: state.events
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
)(EventList)
