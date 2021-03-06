import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions'
import Poller from 'library/poller'
import Event from 'components/Event'
import style from './style.css'
require('react-toggle/style.css')

class EventList extends Component {
  constructor (props) {
    super(props)
    const {actions, isLive, params: {idChannel}} = props
    actions.setChannelFilter(idChannel)

    this.poller = Poller

    if (isLive) {
      this.poller.add(idChannel)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.isLive !== nextProps.isLive) {
      this.toggleSocketListener()
    }
  }

  componentWillUnmount () {
    const {isLive, params: {idChannel}} = this.props
    if (isLive) {
      this.poller.remove(idChannel)
    }
    actions.setChannelFilter(null)
  }

  handleToggle () {
    const {actions, isLive} = this.props
    actions.setLiveToggle(!isLive)
  }

  toggleSocketListener () {
    const {isLive, params: {idChannel}} = this.props

    if (!isLive) {
      this.poller.add(idChannel)
    } else {
      this.poller.remove(idChannel)
    }
  }

  render () {
    const events = this.props.events.map((event, index) => {
      return <Event key={index} {...event} />
    })

    const channelTitle = this.props.channel.title
    const channelDescription = this.props.channel.description

    return (
      <div className={style['normal']}>
        <header className={style['header']}>
          <h2>{channelTitle}</h2>
          <p>{channelDescription}</p>
        </header>

        <ol className={style['event-list']}>
          {events}
        </ol>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    events: state.events.eventList.filter(event => {
      return event.channel === state.events.channelFilter
    }).sort((a, b) => b.createdAt - a.createdAt),
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
