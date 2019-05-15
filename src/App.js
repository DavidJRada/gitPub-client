import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Drinks from './components/Drinks'
import Foods from './components/Foods'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import Cart from './components/Cart'
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
      cart: ["hello"]
    }
  //   this.getDrinks = this.getDrinks.bind(this)
  //   // this.handleAddDrink = this.handleAddDrink.bind(this)
  // }
  // componentDidMount() {
  //   this.getDrinks()
  // }
  // getDrinks() {
  //   fetch(baseURL + '/drinks').then(data => {
  //     return data.json()
  //   }, err => console.log(err))
  //     .then(parsedData => { this.setState({ drinks: parsedData }) }, err => console.log(err))
  }


  render() {
    return (
      <Router>
        <div className="container">
          <h1>The GitPub</h1>
          <h2>Get Your Eat and Drink On With Some JSON</h2>
          <nav>
            <div className='nav-wrapper'>
                <Link to="/">Home</Link>
                <Link to="/drinks">Drinks</Link>
               <Link to="/foods">Food</Link>
               <Link to="/contact">Contact</Link>
               <Link to="/about">About</Link>
               <Link to="/cart">Cart</Link>
            </div>
          </nav>
          <Route path='/' exact component={Home} />
          <Route path='/drinks' render={(props) => <Drinks {...props} cart={this.state.cart} />}
/>
          <Route path='/foods' component={Foods} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/cart' component={Cart} />

        </div>
     
        <Footer />
        
      </Router>
    );
  }
}

export default App;
