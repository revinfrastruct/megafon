import React from 'react'
import style from './style.css'
import ReactHtmlParser from 'react-html-parser'

const Event = ({kind, description, createdAt, media}) => {
  return (
    <li className={style['normal']}>
      <div className={style['content']}>
        <time dateTime={createdAt}>
          {(new Date(createdAt)).toISOString().slice(0, 19).replace('T', ' ').replace(/:[0-9]{2}$/, '')}
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
