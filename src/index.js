import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './body';
import Card from './card';
import Navbar from './navbar';
import Sidebar from './sidebar';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="left_bar">
        <Sidebar />
      </div>
      
      <div className="right_bar">
        
        <Navbar />
        <Card />
        <Body />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);





