import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Parallax } from 'react-parallax';
import Nav from '../components/Nav.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Experience from '../components/Experience.js';
import Contact from '../components/Contact.js';
import SideDrawer from '../components/SideDrawer.js';
import Footer from '../components/Footer.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideDrawerOpen: false
    };

    this.sideDrawerToggle = this.sideDrawerToggle.bind(this);
    this.sideDrawerClose = this.sideDrawerClose.bind(this);
  }

  sideDrawerToggle() {
    this.setState(state => ({
      isSideDrawerOpen: !state.isSideDrawerOpen
    }));
  }

  sideDrawerClose() {
    this.setState({isSideDrawerOpen: false});
  }

  render() {
    function AppContact(props) {
      return (
        <Element name="scroll-to-contact">
          <Parallax className="App-image"
            bgImage={require('../images/working_hq.jpg')}
            bgImageAlt="cpu"
            strength={400}>
          </Parallax>
          <Contact/>
        </Element>);
    }

    return (
      <div className="App">
        <Nav burgerClick={this.sideDrawerToggle}/>
        <SideDrawer action={{close: this.sideDrawerClose, visible: this.state.isSideDrawerOpen}} />
        <Element name="scroll-to-home"><Home/></Element>
        <Parallax className="App-image"
          bgImage={require('../images/cpu_hq.jpg')}
          bgImageAlt="cpu"
          strength={400}>
        </Parallax>
        <Element name="scroll-to-about"><About/></Element>
        <Parallax className="App-image"
          bgImage={require('../images/keyboard_hq.jpg')}
          bgImageAlt="cpu"
          strength={400}>
        </Parallax>
        <Element name="scroll-to-experience"><Experience/></Element>
        <AppContact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
