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
    const {actions, isLive, params: {idChannel}} = props
    actions.setChannelFilter(idChannel)

    if (isLive) {
      socket.on(idChannel, event => {
        actions.addEvent(event)
      })
    }
  }

  componentDidMount () {
    this.toggleListener()
  }

  componentWillUnmount () {
    actions.setChannelFilter(null)
  }

  handleToggle (event) {
    const {actions, isLive} = this.props
    actions.setLiveToggle(!isLive)
  }

  toggleListener () {
    const {actions, params: {idChannel}} = this.props

    if (this.state.isLive) {
      socket.on(idChannel, event => {
        actions.addEvent(event)
      })
    } else {
      socket.removeAllListeners(idChannel)
    }
  }

  render () {
    const events = this.props.events.map((event, index) => {
      return <Event key={index} {...event} />
    })

    return (
      <div className={style['normal']}>
        <div className={style['event-header']}>
          <label htmlFor='isLive'>
            Uppdaterar live
          </label>

          <Toggle
            id='isLive'
            defaultChecked={this.props.isLive}
            onChange={this.handleToggle.bind(this)} />
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
    }),
    isLive: state.channels.isLive
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
