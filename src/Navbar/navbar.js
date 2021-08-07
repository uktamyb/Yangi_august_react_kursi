import React, { Component } from 'react';
import './navbar.css';
import SearchIcon from './img/search.png';
import ArrowIcon from './img/arrow.png';

export default class navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div class="search">
          <img src={SearchIcon} alt="search" className="search-icon" />
          <input placeholder="    Search for a race, car or a driver" />
        </div>
        <div className="choose">
          <input placeholder="    Choose a car" />
          <img src={ArrowIcon} alt="arrow" className="arrow-icon" />
        </div>
      </div>
    )
  }
}
