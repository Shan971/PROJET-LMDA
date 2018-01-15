import React, { Component } from 'react';
import img from './facebook.png';
import twitter from'./twitter.png';
import google from './google.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className='details'>
            <div className='icon social fb'><i className='fa fa-facebook'></i></div>
            <div className='icon social tw'><i className='fa fa-twitter'></i></div>
            <div className='icon social in'><i className='fa fa-instagram'></i></div>
          </div> 
        <div className="home"><i className="fa fa-home" aria-hidden="true"> :MaisondesArtistes@gmail.com </i></div>
        <div className="home"><i className="fa fa-phone" aria-hidden="true"> :0590 87 65 99</i></div>
        <p className="coeur">Made by Simplon <i className="fa fa-heart" aria-hidden="true"></i></p>


        
      </div>
    );
  }
}

export default App;

