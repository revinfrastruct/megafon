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

  componentWillReceiveProps (nextProps) {
    if (this.props.isLive !== nextProps.isLive) {
      this.toggleSocketListener()
    }
  }

  componentWillUnmount () {
    const idChannel = this.props.params.idChannel
    socket.removeAllListeners(idChannel)
    actions.setChannelFilter(null)
  }

  handleToggle () {
    const {actions, isLive} = this.props
    actions.setLiveToggle(!isLive)
  }

  toggleSocketListener () {
    const {actions, isLive, params: {idChannel}} = this.props

    if (!isLive) {
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

    const channelTitle = this.props.channel.title

    return (
      <div className={style['main']}>
        <div className={style['ticker']}>
            <div className={style['header']}>
                <h1>#nmr12nov</h1>
                <div className={style['description']}>
                    <p>12/11 har nazisterna i Nordiska motståndsrörelsen ansökt om att få demonstrera i Stockholm. <a href="https://www.facebook.com/events/1456368604376459/" className={style['readmore']}>Läs mer</a></p>
                </div>
            </div>
            {events}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    events: state.events.eventList.filter(event => {
      return event.channel === state.events.channelFilter
    }),
    channel: state.channels.channelList.find(channel => {
      return channel.topic === ownProps.params.idChannel
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
