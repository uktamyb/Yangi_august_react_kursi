import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar/sidebar';
import Navbar from './Navbar/navbar';
import Body from './Body/body';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <div className='body-wrapper'>
          <Navbar />
          <Body />
        </div>
        
      </div>
    )
  }
}
