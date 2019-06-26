import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Cities from './components/Cities';
import RestaurantList from './components/RestaurantList';
import Register from './components/Register';
import Restaurant from './components/Restaurant';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar>
        <NavbarBrand>Restaurant Passport</NavbarBrand>
        <div className='Links'>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/cities'>Cities</Link>
            <Link to='/cities/:id/restaurants'>Restaurants</Link>
            <Link to='/resaurant/1'>Resties</Link>
          </div>
      </Navbar>
        <Route path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/cities' component={Cities} />
        <Route exact path='/cities/:id/restaurants' component={RestaurantList} />
        <Route exact path='/restaurant/1' component={Restaurant} />
        <Restaurant />
      
    </div>
    </Router>
  );
}

export default App;
