import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import Footer from './components/Footer';


const App = (props) => {
    
  const activeStyle = {
    color: "#CD7F32",
  };
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "maroon",
    fontWeight: "bold",
    fontSize: "1.2em",
  };

  return (
    <Router>
      <div className="App container">
      <div>
        <NavLink exact to="/" style={linkStyle} activeStyle={activeStyle}>Home</NavLink>
        <strong>{' | '}</strong>
        <NavLink to="/about" style={linkStyle} activeStyle={activeStyle}>About</NavLink>
        <strong>{' | '}</strong>
        <NavLink to="/properties" style={linkStyle} activeStyle={activeStyle}>Properties</NavLink>
        <strong>{' | '}</strong>
        <NavLink to="/contact" style={linkStyle} activeStyle={activeStyle}>Contact</NavLink>
      </div>
      <Header />
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
        <Route path="/properties" component={Properties} />
        <Route path="/contact" component={Contact} />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
