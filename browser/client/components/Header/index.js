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
            <a href="https://www.facebook.com/motkraft/" title="Motkraft på Facebook"><span className={style['facebook']}>Facebook</span></a>
            <a href="https://twitter.com/motkraft" alt="Motkraft på Twitter"><span className={style['twitter']}>Twitter</span></a>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
