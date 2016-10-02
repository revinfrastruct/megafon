import React, {Component} from 'react'
import Channel from 'components/Channel'

const data = [
  {
    id: '5fd5f30b-fdd5-4f7f-a9af-18e752cc02e5',
    title: 'NMR 12e September',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  {
    id: '5fd5f30b-fdd5-4f7f-a9af-18e752cc02e3',
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
