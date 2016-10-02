import React, {Component} from 'react'
import style from './style.css'

class Event extends Component {
  render () {
    const {title, body} = this.props.event

    return (
      <li className={style['normal']}>
        {title} - {body}
      </li>
    )
  }
}

export default Event
