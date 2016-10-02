import React, {Component} from 'react'
import style from './style.css'
import Event from 'components/Event'

class Events extends Component {
  render () {
    const events = this.props.events.map((event, index) => {
      return <Event key={index} event={event} />
    })

    return (
      <ol className={style['normal']}>
        {events}
      </ol>
    )
  }
}

export default Events
