import React, { Component } from 'react';
import './card.css'

export default class card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="start" className="start" />
        <p className="card-text">{this.props.title}</p>
      </div>
    )
  }
}
