import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header.js';
import { StudentsResult } from './Students.js';

class App extends Component {
  
  render() {
    const sstudent = '';
    const STDS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React1</h1>
          <div className="Header">
            <Header headerHref={'home'} headerClass={'home-class'} headerText ={'Home'} />
            <Header headerHref={'blog'} headerClass={'blog-class'} headerText ={'Blog'} />
            <Header headerHref={'contact-us'} headerClass={'cu-class'} headerText ={'Contact Us'} />
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <StudentsResult students={STDS} />
      </div>
    );
  }
}

export default App;
