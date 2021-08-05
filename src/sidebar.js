import React, { Component } from 'react';
import './index.css'

export default class sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          iffee
        </div>
        <div className="menu">
          <h5>Menu</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Garage</a></li>
            <li><a href="#">Service Menu</a></li>
            <li><a href="#">Racers</a></li>
            <li><a href="#">Calculator</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </div>
        <div className="driver">
          <h5>Sheduled Races</h5>
        </div>
      </div>
    )
  }
}
