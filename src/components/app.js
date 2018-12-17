import React, { Component } from 'react';
import Navigation from './navbar';
import Footer from './footer';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        <div className='chores'>
          <h1>Daily Chore List</h1>
          <h1> Completed Chores </h1>
        </div>
        <Footer />
      </div>
    );
  }
}
