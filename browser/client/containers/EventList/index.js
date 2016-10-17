import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions'
import socket from 'socket'
import Toggle from 'react-toggle'
import Event from 'components/Event'
import style from './style.css'
require('react-toggle/style.css')

class EventList extends Component {
  constructor (props) {
    super(props)
    const {actions, params: {idChannel}} = props
    actions.setChannelFilter(idChannel)

    this.state = {
      isLive: true
    }
  }

  componentDidMount () {
    const {actions, params: {idChannel}} = this.props
    socket.on(idChannel, event => {
      actions.addEvent(event)
    })
  }

  componentWillUnmount () {
    const {params: {idChannel}} = this.props
    socket.off(idChannel)
    actions.setChannelFilter(null)
  }

  render () {
    const events = this.props.events.map((event, index) => {
      return <Event key={index} {...event} />
    })

    return (
      <div className={style['normal']}>
        <div className={style['event-header']}>
          <label htmlFor='is-live'>
            Uppdaterar live
          </label>

          <Toggle id='is-live' defaultChecked={this.state.isLive} />
        </div>

        <ol>
          {events}
        </ol>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    events: state.events.bucket.filter(event => {
      return event.channel === state.events.channelFilter
    })
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
