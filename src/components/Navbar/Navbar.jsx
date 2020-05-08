import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.activ}`}>
        <a href={'/profile'}>JS Profile JS</a>
      </div>
      <div className={s.item}>
        <a href={'/dialogs'}>JS Message JS</a>
      </div>
      <div className={s.item}>
        <a href={'/news'}>JS News JS</a>
      </div>
      <div className={s.item}>
        <a href={'/music'}>JS Music JS</a>
      </div>
      <div className={s.item}>
        <a href={'/settings'}>JS Settings JS</a>
      </div>
    </nav>
  )
}

export default Navbar;