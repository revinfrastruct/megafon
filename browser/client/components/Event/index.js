import React from 'react'
import style from './style.css'
import ReactHtmlParser from 'react-html-parser'

const Event = ({kind, description, createdAt, media}) => {
  const time = new Date(createdAt)
  const timeStr = time.getUTCFullYear() + '-' +
    ('00' + (time.getMonth() + 1)).slice(-2) + '-' +
    ('00' + time.getDate()).slice(-2) + ' ' +
    ('00' + time.getHours()).slice(-2) + ':' +
    ('00' + time.getMinutes()).slice(-2)

  return (
    <li className={style['normal']}>
      <div className={style['content']}>
        <time dateTime={createdAt}>
          {(timeStr)}
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
