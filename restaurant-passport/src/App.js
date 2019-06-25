import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar>
        <NavbarBrand>Restaurant Passport</NavbarBrand>
        <div className='Links'>
            <Link to='/login'>Login</Link>
          
            <Link to='/cities'>Cities</Link>
          </div>
      </Navbar>
        <Route path='/login' component={Login} />
        {/* <PrivateRoute exact path='/protected' component={Cities} /> */}
        {/* <PrivateRoute exact path='/protected' component={Cities} /> */}
      
    </div>
    </Router>
  );
}

export default App;
