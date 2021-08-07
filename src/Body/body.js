import React, { Component } from 'react';
import './body.css';
import Card from '../Card/card.js';
import Key from '../Card/img/key.png';
import Drive from '../Card/img/drive.png';
import Maintenance from '../Card/img/maintenance.png';
import Battery from '../Card/img/battery1.png';
import Tires from '../Card/img/tires1.png';
import Lock from '../Card/img/lock.png';

import arrowL from './img/arrow-left.png';
import arrowR from './img/arrow-right.png';
import Car from './img/Car.png';

export default class body extends Component {
  render() {
    return (
      <div body-container>
        <div className="card-item">
          <Card img={Key} title="Start" />
          <Card img={Drive} title="Drive" />
          <Card img={Maintenance} title="Maintenance" />
          <Card img={Battery} title="Battery" />
          <Card img={Tires} title="Tires" />
          <Card img={Lock} title="Lock" />
        </div>

        <div className="body-center">
          <div className="body-car">
            <div className="car-top">
              <div className="car-text">
                <p className="renault">
                  Infinity Renault {"&trade;"}
                </p>
                
              </div>
              <div className="arrow-boxes">
                <img src={arrowL} alt="left-arrow" className="left-arrow" />
                <img src={arrowR} alt="right-arrow" className="right-arrow" />
              </div>
              

            </div>
            <div className="car">
              <img src={Car} alt="car" className="car-img" />  
            </div>
          </div>
          <div className="body-chart">
            
          </div>
        </div>
        
      </div>
    )
  }
}
