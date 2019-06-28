import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { getUserRestaurants } from '../actions';

class VisitedRestaurants extends React.Component {
    componentDidMount() {
        this.props.getUserRestaurants()
    };


render() {
    console.log('userIDDDD', this.props.user_id);
    
    let loggedUser = localStorage.getItem('userId');
    let visitedRestaurants = this.props.stampedRestaurants.user_id === loggedUser ? 
    this.props.stampedRestaurants.map(city => (
        <div className='rest-list' key={city.id}>
            <div key={city.id}>
            <h2>{city.name}</h2>
            </div>  
        </div>
    )) : 
        <h1>No Visited Restaurants</h1>
    
    console.log('city User ID', this.props.stampedRestaurants);
    return (
        <div>
            <h1 className='user-restuarants-header'>Stamped</h1>
            
            <div className='rest-list-wrapper'>
               <h3> {visitedRestaurants} </h3>
                
            </div>
        </div>
    )
}
}

const mapStateToProps = ({ error, stampedRestaurants, fetchingData }) => ({
    error,
    stampedRestaurants,
    fetchingData
});

export default withRouter(
    connect(
        mapStateToProps,
        { getUserRestaurants }
    )(VisitedRestaurants)
)