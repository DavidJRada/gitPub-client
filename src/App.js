import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Drinks from './components/Drinks'
import Foods from './components/Foods'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>The GitPub</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/drinks">Drinks</Link>
            <Link to="/foods">Food</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </nav>
          <Route path='/' exact component={Home} />
          <Route path='/drinks' component={Drinks} />
          <Route path='/foods' component={Foods} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />

        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
