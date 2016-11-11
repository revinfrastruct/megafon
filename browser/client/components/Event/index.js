import React from 'react'
import style from './style.css'
import moment from 'moment'
import ReactHtmlParser from 'react-html-parser'

const Event = ({kind, description, createdAt, media}) => {
  return (
    <li className={style['normal']}>
      <div className={style['content']}>
        <time dateTime={createdAt}>
          {moment(createdAt).fromNow()}
        </time>
        {(
          media
          ? <img src={media.src} width={media.w} height={media.h} />
          : undefined
        )}
        <div>
          {ReactHtmlParser(description)}
        </div>
      </div>
    </li>
  )
}

export default Event
