import React, { Component } from 'react';
import './item.css';


export default class item extends Component {
  render() {
    return (
      <div className="item">
        <img src={this.props.img} alt="home" className="home" />
        <p className="item-text">{this.props.title}</p>
      </div>
    )
  }
}
