import React, {Component} from 'react'
import Event from 'components/Event'

const data = {
  '5fd5f30b-fdd5-4f7f-a9af-18e752cc02e5': [
    {
      kind: 'info',
      title: 'Important information',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    {
      kind: 'bell',
      title: 'Super important information!',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    {
      kind: 'tweet',
      description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. #sometag'
    }
  ],

  '5fd5f30b-fdd5-4f7f-a9af-18e752cc02e3': [
    {
      kind: 'tweet',
      description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. #sometag'
    },

    {
      kind: 'info',
      title: 'Super important information!',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]
}

class EventList extends Component {
  render () {
    const {idChannel} = this.props.params

    const events = data[idChannel].map((event, index) => {
      return <Event key={index} {...event} />
    })

    return (
      <ol>
        {events}
      </ol>
    )
  }
}

export default EventList
