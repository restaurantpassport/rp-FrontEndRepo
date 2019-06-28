import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
// import { withRouter } from 'react-router-dom';


import { getUserRestaurants } from '../actions';

const Stamps = props => {
    const fetchRestaurants = e => {
        e.preventDefault();
        props.getUserRestaurants()
    }
    let user_id = parseInt(localStorage.getItem('userId'));
    console.log('userID', user_id);
    console.log('Stamped Restauarants props', props.stampedRestaurants);

    return(
        <div>
            <Button color='warning' onClick={fetchRestaurants}>My Stamps</Button>

            <div className='stamped-wrapper'>
            {props.stampedRestaurants.map(city => (
                  <div className='stamped-list' key={city.id}>
                      <div key={city.id}>
                      <h2>{city.name}</h2>
                      </div>
                      
                  </div>
              ))
             }
             </div>
        </div>
    )
}

const mapStateToProps = state => ({
    stampedRestaurants: state.stampedRestaurants,
    error: state.error
});

export default connect(
    mapStateToProps,
    { getUserRestaurants }
)(Stamps);