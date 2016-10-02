import React, {Component} from 'react'
import style from './style.css'

class Header extends Component {
  render () {
    console.log(this.props)

    return (
      <header className={style['normal']}>
        <h1>Megafon</h1>

        <span>

        </span>
      </header>
    )
  }
}

export default Header
