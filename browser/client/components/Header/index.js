import React, {Component} from 'react'
import style from './style.css'

class Header extends Component {
  render () {
    return (
      <header className={style['normal']}>
        <div className={style['container']}>
          <h1 className={style['logotype']}>
            Motkraft
          </h1>
          <div className={style['social']}>
            <a href="https://www.facebook.com/motkraft/"><img src="/assets/icon_facebook.svg" alt="Motkraft på Facebook" /></a>
            <a href="https://twitter.com/motkraft"><img src="/assets/icon_twitter.svg" alt="Motkraft på Twitter" /></a>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
