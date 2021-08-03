import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './body';
import Card from './card';
import Navbar from './navbar';
import Sidebar from './sidebar';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <div className='left-side'>
        <div className='logo'></div>
        <div className='menu'></div>
        <div className='sheduled-races'></div>
        <div className='driver'></div>
      </div>

      <div className='right-side'>

      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);



