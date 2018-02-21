import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <li>
        <a href="test1" href={this.props.headerHref} className={this.props.headerClass}>{this.props.headerText}</a>
      </li>
    );
  }
}