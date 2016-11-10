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
        </div>
      </header>
    )
  }
}

export default Header
