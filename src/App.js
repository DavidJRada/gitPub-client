import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Drinks from './components/Drinks'
import Foods from './components/Foods'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import Login from './components/login/Login'
import './css/App.css';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';


// let baseURL = process.env.REACT_APP_BASEURL


// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3004'
// } else {
//   baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
// }


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      isLoggedIn: false,
      isAdmin: false
    }
    this.toggleLogIn = this.toggleLogIn.bind(this)
  }
  toggleLogIn() {
    // console.log(this.state.isLoggedIn)
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
    }

  render() {
    return (
      <Router>
        <div className="container">
          {this.state.isLoggedIn ? <h1>GitPub - Welcome Admin!</h1>
            : <h1>GitPub</h1>}
          <nav>
            <div className='nav-wrapper black text-darken-2'>
              <Link to="/">Home</Link>
              <Link to="/drinks">Drinks</Link>
              <Link to="/foods">Food</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
              {this.state.isLoggedIn ? null : <Link to="/login">Log In</Link>}
              {this.state.isLoggedIn ? <Link to='/' onClick={this.toggleLogIn}>Log Out</Link>
                : null}

            </div>
          </nav>
          <h4 className='quote'>"Get Your Eat and Drink On With Some JSON" - N.W.A</h4>
          <Route path='/' exact component={Home} />
          <Route path='/drinks' render={() => <Drinks isLoggedIn={this.state.isLoggedIn} />} />

          <Route path='/foods' render={() => <Foods isLoggedIn={this.state.isLoggedIn} />} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path="/login" render={() => <Login toggleLogIn={this.toggleLogIn} />} />

        </div>
     
<hr></hr>
        <Footer />

      </Router>
    );
  }
}

export default App;
