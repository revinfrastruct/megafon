import React from 'react'
import style from './style.css'
import moment from 'moment'
import ReactHtmlParser from 'react-html-parser'
import {IoSocialTwitter as Twitter} from 'react-icons/lib/io'

const Event = ({kind, description, createdAt}) => {
  return (
    <li className={style['normal']}>
      <div className={style['icon']}>
        <Twitter size={35} color='#1da1f2' />
      </div>

      <div className={style['content']}>
        <time dateTime={createdAt}>
          Publicerad {moment(createdAt).fromNow()}
        </time>

        <div>
          {ReactHtmlParser(description)}
        </div>
      </div>
    </li>
  )
}

export default Event
