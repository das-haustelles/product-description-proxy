import React from 'react';

import HeaderLogo from './HeaderLogo.jsx'
import HeaderNav from './HeaderNav.jsx'
import Location from './Location.jsx'
import styles from '../stylesheets/Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles.topCont}>
        <div className={styles.headerCont}>
          <HeaderLogo />
          <HeaderNav />
          <Location />
        </div>
      </div>
    )
  }
}

export default Header;

