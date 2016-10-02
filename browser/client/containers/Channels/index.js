import React, {Component} from 'react'
import style from './style.css'
import Events from 'components/Events'

const events = [
  {
    title: 'My title',
    body: 'My body'
  },

  {
    title: 'My title',
    body: 'My body'
  }
]

class Channels extends Component {
  render () {
    return (
      <Events events={events} />
    )
  }
}

export default Channels
