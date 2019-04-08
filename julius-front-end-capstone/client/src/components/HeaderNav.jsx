import React from 'react';
import Sidebar from "react-sidebar";
import styles from '../stylesheets/HeaderNav.css'

class HeaderNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen() {
    // open side menu
    var toggle = !this.state.sidebarOpen;
    this.setState({
      sidebarOpen: toggle
    })
  }

  render() {
    
    return (
      <div id={styles.headerNav}>
        <ul id={styles.navList}>
          {/* Signin */}
          <li>
            <span className={styles.iconHolder}>
              <img className={styles.icon} src="https://flaticons.net/gd/makefg.php?i=icons/Application/User-Profile.png&r=255&g=255&b=255"></img>
            </span>
          </li>
          {/* Language */}
          <li>
            <span className={styles.iconHolder}>
              <img className={[styles.icon, styles.language].join(' ')} src="https://image.flaticon.com/icons/svg/330/330425.svg"></img>
            </span>
          </li>
          {/* Currency */}
          <li>
            <span className={[styles.iconHolder, styles.currency].join(' ')}>USD</span>
          </li>
          {/* Search */}
          <li>
            <span className={styles.iconHolder}>
              <img className={[styles.icon, styles.searchIcon].join(" ")} src="https://ya-webdesign.com/images/white-magnifying-glass-png-13.png"></img>
            </span>
          </li>
          {/* DropSide Menu */}
          <li>
            <span className={styles.iconHolder} >
              
            </span>
          </li>
        </ul>

        {/* navbar */}
        <div className='NavMenu'>
          <Sidebar
            sidebar={
              <ul className={styles.sidebarList}>
                <li className={styles.listItem}>HOME</li>
                <li className={styles.listItem}>SIGN IN / CREATE ACCOUNT</li>
                <li className={styles.listItem}>HELP</li>

                <li>
                  <p className={styles.listHeader}>LANGUAGE:</p>
                  <select id={styles.languageSelect}>
                    <option>český</option>
                    <option>Dansk</option>
                    <option>Deutsch</option>
                    <option>English</option>
                    <option>español</option>
                    <option>Français</option>
                    <option>한국어</option>
                    <option>Italiano</option>
                    <option>Nederlands</option>
                    <option>Norsk</option>
                    <option>Polski</option>
                    <option>Português</option>
                    <option>Português (Brasil)</option>
                    <option>Pусский</option>
                    <option>日本語</option>
                    <option>Svenska</option>
                    <option>Suomi</option>
                    <option>Türk</option>
                    <option>中文</option>
                  </select>
                </li>

                <li>
                  <p className={styles.listHeader}>CURRENCY:</p>
                  <select id={styles.currencySelect}>
                    <option>EUR</option> <option>GBP</option> <option>USD</option>
                    <option disabled>──────────</option>
                    <option>AED</option> <option>ALL</option> <option>AMD</option> <option>ARS</option> <option>AUD</option> <option>AZN</option>     
                    <option>BDT</option> <option>BGN</option> <option>BHD</option> <option>BND</option> <option>BOB</option> <option>BRL</option>
                    <option>BSD</option> <option>BZD</option> <option>CAD</option> <option>CHF</option> <option>CLP</option> <option>CNY</option>
                    <option>COP</option> <option>CRC</option> <option>CUC</option> <option>CZK</option> <option>DJF</option> <option>DKK</option>
                    <option>DOP</option> <option>DZD</option> <option>EGP</option> <option>EUR</option> <option>FJD</option> <option>GBP</option>
                    <option>GEL</option> <option>HKD</option> <option>HNL</option> <option>HRK</option> <option>HUF</option> <option>IDR</option>
                    <option>ILS</option> <option>INR</option> <option>IRR</option> <option>ISK</option> <option>JOD</option> <option>JPY</option>
                    <option>KES</option> <option>KGS</option> <option>KHR</option> <option>KMF</option> <option>KRW</option> <option>KWD</option>
                    <option>KZT</option> <option>LAK</option> <option>LBP</option> <option>LKR</option> <option>MAD</option> <option>MNT</option>
                    <option>MRO</option> <option>MUR</option> <option>MXN</option> <option>MYR</option> <option>NAD</option> <option>NIO</option> 
                    <option>NOK</option> <option>NPR</option> <option>NZD</option> <option>OMR</option> <option>PEN</option> <option>PGK</option>
                    <option>PHP</option> <option>PKR</option> <option>PLN</option> <option>PYG</option> <option>QAR</option> <option>RON</option>
                    <option>RUB</option> <option>RWF</option> <option>SAR</option> <option>SEK</option> <option>SGD</option> <option>SOS</option>
                    <option>SZL</option> <option>THB</option> <option>TND</option> <option>TOP</option> <option>TRY</option> <option>TTD</option>
                    <option>TWD</option> <option>TZS</option> <option>UAH</option> <option>UGX</option> <option>USD</option> <option>UYU</option>
                    <option>VEF</option> <option>VND</option> <option>VUV</option> <option>WST</option> <option>XAF</option> <option>XCD</option>  
                  </select>
                </li>

                  <span className={styles.listHeader}>ACCOMMODATION</span>
                  <ul className={styles.sidebarList}>
                    <li className={styles.listItem}>HOSTELS</li>
                    <li className={styles.listItem}>HOTELS</li>
                    <li className={styles.listItem}>BED AND BREAKFASTS</li>
                  </ul>

                  <span className={styles.listHeader}>EXPLORE HOSTELWORLD</span>
                  <ul className={styles.sidebarList}>
                    <li className={styles.listItem}>BLOG</li>
                    <li className={styles.listItem}>GROUP BOOKINGS</li>
                    <li className={styles.listItem}>BOOKING GUARANTEE</li>
                    <li className={styles.listItem}>HOSTEL AWARDS</li>
                  </ul>

                  <span className={styles.listHeader}>WORK WITH US</span>
                  <ul className={styles.sidebarList}>
                    <li className={styles.listItem}>HOSTEL SIGN UP</li>
                    <li className={styles.listItem}>AFFILITATE PROGRAM</li>
                  </ul>
              </ul>
            }
            pullRight={true} 
            onClick={this.onSetSidebarOpen}
            open={this.state.sidebarOpen}
            // docked={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "black" } }}
          >
          <span className={[styles.iconHolder, styles.menuButton].join(' ')} onClick={() => this.onSetSidebarOpen(true)}>
            <img className={styles.icon} src="http://pepispubngrill.com/img/menu.png"></img>
          </span>
          </Sidebar>
        </div>

      </div>
    )
  }
}

export default HeaderNav;
