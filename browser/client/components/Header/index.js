import React, {Component} from 'react'
import style from './style.css'

class Header extends Component {
  render () {
    return (
      <header className={style['normal']}>
        <h1>Megafon</h1>
      </header>
    )
  }
}

export default Header
