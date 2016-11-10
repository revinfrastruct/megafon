import React from 'react'
import style from './style.css'
import moment from 'moment'
import ReactHtmlParser from 'react-html-parser'

const Event = ({kind, description, createdAt}) => {
  return (
    <li className={style['normal']}>
      <div className={style['content']}>
        <div>
          {ReactHtmlParser(description)}
        </div>

        <time dateTime={createdAt}>
          Publicerad {moment(createdAt).fromNow()}
        </time>
      </div>
    </li>
  )
}

export default Event
