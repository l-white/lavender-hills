import React, {useState} from 'react';
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


const App = (props) => {
  const [properties] = useState([
    {
      id: 1,
      name: "Murray Avenue",
      address: "",
      management: "Bella Properties",
      rent: 1575,
      yearBuilt: 1899,
      units: 2,
      neighborhood: "UWM",
      vacancies: 0,
      phone: 414-777-5555,
      description: "Located in the heart of Milwaukee near the University of Wisconsin-Milwaukee campus, this Murray Avenue duplex is popular among college students. Property manager Michael Vitucci keeps this top-notch duplex running smoothly and has a long history of working well with student tenants.",
    },
    {
      id: 2,
      name: "4 Family",
      address: "",
      management: "Matt Leonard",
      rent: 750,
      yearBuilt: 1899,
      units: 4,
      neighborhood: "Riverwest",
      vacancies: 1,
      phone: 414-777-5555,
      description: "Close to downtown Milwaukee and the University of Wisconsin-Milwaukee, this four-family property in Riverwest has much more to offer than a great location. The neighborhood features some great ethnic restaurants, Art Walk, and annual festivals. Landlord Scot Henry has made several recent upgrades to this property, including a brand-new parking lot for tenants and fresh exterior paint and siding.",
    },
    {
      id: 3,
      name: "Delaware Ave",
      address: "",
      management: "Scot Henry",
      rent: 1250,
      yearBuilt: 1913,
      units: 2,
      neighborhood: "Bay View",
      vacancies: 0,
      phone: 414-777-5555,
      description: "Nestled in a quiet, residential neighborhood in Bay View, Delaware Avenue residents live within walking distance of parks and a wooded area, perfect for outdoor enthusiasts, avid runners and walkers, and those who wish to remain in Milwaukee while living close to nature.",
    },
    {
      id: 4,
      name: "Wentworth Ave",
      address1: "2868 S. Wentworth Avenue",
      address2: "Milwaukee, WI 53207",
      management: "Scot Henry",
      rent: 1450,
      yearBuilt: 1913,
      units: 2,
      neighborhood: "Bay View",
      vacancies: 0,
      phone: 414-777-5555,
      description: "This Wentworth Avenue duplex in Bay View is just a ten-minute drive from downtown Milwaukee and overlooks Lake Michigan. During the summer and early autumn, tenants can step outside and enjoy access to fresh produce at a robust farmer's market every Saturday morning that is just a few paces from their back door. Tenants also enjoy close proximity to some excellent restaurants and coffee houses.",
    },
  ]);
  return (
    <Router>
      <div className="App container">
      <Header />
      <Nav />
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
