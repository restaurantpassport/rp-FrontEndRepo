import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Cities from './components/Cities';
import RestaurantList from './components/RestaurantList';
import Register from './components/Register';
import Restaurant from './components/Restaurant';
// import { getRestaurants } from './actions';
import { Navbar, NavbarBrand } from 'reactstrap';
// console.log('APP props', props)
function App() {
  return (
    <Router>
    <div className="App">

      <Navbar style = {{ backgroundColor: '#ffc107' }}>
        <NavbarBrand style={{ color: 'black'}}>Restaurant Passport</NavbarBrand>
        <div className='Links'>
            <Link style={{color: 'black'}}  to='/login'>Login</Link>
            <Link style={{color: 'black'}} to='/register'>Register</Link>
            <Link style={{color: 'black'}} to='/cities'>Cities</Link>
            {/* <Link style={{color: 'black'}} to='/logout/'>Logout</Link> */}
            {/* <Link style={{color: 'black'}} to='/resaurant/:id'>Resties</Link> */}
          </div>
      </Navbar>

        <Route path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/cities' component={Cities} />
        {/* <Route
          path='logout'
          render={props => {
            localStorage.clear();
            return <Redirect to ='/login' />;
          }}
          /> */}
        <Route 
          exact 
          path='/cities/:id/restaurants' 
          render={props => (
            <RestaurantList
            restaurants={props.restaurants} />
          )}
          />
        
        <Route
        exact
        path='/cities/restaurants/:id'
        component={Restaurant} />
      
    </div>
    </Router>
  );
}

export default App;
