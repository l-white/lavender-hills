import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import Footer from './components/Footer';


const App = () => {

  return (
    <Router>
      <div className="App container">
      <Nav />
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
