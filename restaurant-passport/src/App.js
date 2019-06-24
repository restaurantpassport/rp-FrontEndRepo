import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">

        <ul>
          <li>
            <Link to='/login'></Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
        </ul>
        <Route path='/login' component={Login} />
        {/* <Route exact path='/proctected' component={Cities} /> */}
       
      
    </div>
    </Router>
  );
}

export default App;
