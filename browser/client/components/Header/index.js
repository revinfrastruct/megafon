import React, {Component} from 'react'
import {Link} from 'react-router'
import style from './style.css'

class Header extends Component {
  render () {
    return (
      <header>
        <div className={style['headerContent']}>
            <div className={style['radioToggle']}>
                <a href="#" title="Visa/göm radiospelare">
                    <img src="images/radio_toggle@2x.png" srcSet="images/radio_toggle.png 1x, images/radio_toggle@2x.png 2x" alt="Visa/göm radiospelare" />
                </a>
            </div>
            <h1>
                <Link to='/'>Motkraft</Link>
            </h1>

        </div>
        <div className={style['radioContainer']}>
            <div className={style['playPaus']}>x</div>
            <div className={style['progress']}>y</div>
        </div>
    </header>
    )
  }
}

export default Header
