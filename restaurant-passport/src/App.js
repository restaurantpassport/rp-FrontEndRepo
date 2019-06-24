import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import { NavbarBrand } from 'reactstrap';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <NavbarBrand>Restaurant Passport</NavbarBrand>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/cities'>Cities</Link>
          </li>
        </ul>
      </nav>
        <Route path='/login' component={Login} />
        {/* <PrivateRoute exact path='/protected' component={Cities} /> */}
        {/* <PrivateRoute exact path='/protected' component={Cities} /> */}
      
    </div>
    </Router>
  );
}

export default App;
