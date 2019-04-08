import React from 'react';
import styles from '../stylesheets/Location.css'

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "France",
      region: "Ile-defrance",
      city: "Paris",
      hostelName:  "Jo&joe Paris - Gentilly",
      address: "89 Avenue Paul Vaillant Couturier, 6 Etage - JO&JOE , Paris, France"
    }

  }
  render() {
    
    return (
      <div className={styles.locationCont}>
        {/* Badges */}

        {/* Hierarchy */}
        <div className={styles.hierarchy}>
        <ul>
          <li>Home</li>
          <li className={styles.innerListItem}>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</li>
          <li>{this.state.country} Hostels</li>
          <li className={styles.innerListItem}>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</li>
          <li>{this.state.region} Hostels </li>
          <li className={styles.innerListItem}>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</li>
          <li>{this.state.city} Hostels  </li>
          <li className={styles.innerListItem}>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</li>
          <li >{this.state.hostelName}</li>
        </ul>
        </div>

        {/* Hostelname */}
        <div className={styles.hostelName}>
          {this.state.hostelName}
        </div>

        {/* Address */}
        <div className={styles.address}>
          {/* navigation icon */}
          <img className={styles.navigationIcon} src="https://www.pr-momentum.com/wp-content/uploads/2016/06/pin-4.png"></img>
          <div className={styles.addressText}>
            {this.state.address}
          </div>
        </div>
      </div>
    )
  }
}

export default Location;