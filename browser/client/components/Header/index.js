import React, {Component} from 'react'
import {Link} from 'react-router'
import style from './style.css'
import logoMotkraft from 'assets/motkraft.png'

class Header extends Component {
  render () {
    return (
      <header className={style['normal']}>
        <img src={logoMotkraft} alt='hello' />

        <h1>
          <Link to='/'>Megafon</Link>
        </h1>
      </header>
    )
  }
}

export default Header
