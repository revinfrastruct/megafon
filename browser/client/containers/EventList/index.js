import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions'
import Event from 'components/Event'

class EventList extends Component {
  componentDidMount () {
    const {actions} = this.props

    this.addEventTimer = window.setInterval(() => {
      actions.addEvent({
        kind: 'info',
        title: 'Important information',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      })
    }, 15000)
  }

  componentWillUnmount () {
    window.clearInterval(this.addEventTimer)
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
