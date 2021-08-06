import React, { Component } from 'react';
import './sidebar.css';
import logo from '../img/logo.png';
import Item from '../Item/item';
import Home from '../img/home.jpg';
import Garage from '../img/garage.png';
import S_menu from '../img/service menu.jpg';
import Racers from '../img/user.jpg';
import Calc from '../img/calc.jpg';
import Settings from '../img/settings.jpg';

// Sheduled races icons
import MotoGP from '../img/motogp.png';
import Dynamics from '../img/dynamics.png';
import Olympics from '../img/olympics.png';


export default class sidebar extends Component {
  render() {
    return (
      <div className='sidebar-container'>
        <div className="logo-wrapper">
          <img src={logo} alt="logo" className='logo' />
          <p className="logo-text">ifee</p>
        </div>

        <p className="menu">Menu</p>
        <Item img={Home} title="Home" />
        <Item img={Garage} title="Garage" />
        <Item img={S_menu} title="Service Menu" />
        <Item img={Racers} title="Racers" />
        <Item img={Calc} title="Calculator" />
        <Item img={Settings} title="Settings" />

        <p className="sheduled-races">Sheduled Races</p>
        <Item img={MotoGP} title="MotoGP 2022" />
        <Item img={Dynamics} title="Dynamics 22" />
        <Item img={Olympics} title="Olympics" />
      </div>
    )
  }
}
