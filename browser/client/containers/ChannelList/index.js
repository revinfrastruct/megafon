import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions'
import Channel from 'components/Channel'

const data = [
  {
    topic: 'nmr',
    title: 'NMR 12e September',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  {
    topic: 'forbifart-sthlm',
    title: 'Förbifart Stockholm',
    description: 'Consectetur adipisicing elit, sed do eiusmod tempor.'
  }
]

class ChannelList extends Component {
  render () {
    const channels = data.map((channel, index) => {
      return <Channel key={index} {...channel} />
    })

    return (
      <ol>
        {channels}
      </ol>
    )
  }
}

export default ChannelList
function mapStateToProps (state) {
  return {
    channels: state.channels
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
)(ChannelList)
