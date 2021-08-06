import React, { Component } from 'react';
import './sidebar.css';
import logo from '../img/logo.png';

export default class sidebar extends Component {
  render() {
    return (
      <div className='sidebar-container'>
        <div className="logo-wrapper">
          <img src={logo} alt="logo" className='logo' />
          <p className="logo-text">ifee</p>
        </div>
      </div>
    )
  }
}
