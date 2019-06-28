import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { getUserRestaurants } from '../actions';

class VisitedRestaurants extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params
        this.props.getUserRestaurants(id)
    };


render() {    
    // let loggedUser = localStorage.getItem('userId');
    // let mappedUser = this.props.stampedRestaurants.map(item => item.user_id)
    // let loggedUserID = mappedUser[0];
   
    // let visitedRestaurants = loggedUserID === loggedUser ? 
    // this.props.stampedRestaurants.map(city => (
    //     <div className='rest-list' key={city.id}>
    //         <div key={city.id}>
    //         <h2>{city.name}</h2>
    //         </div>  
    //     </div>
    // )) : 
    //     <h1>No Visited Restaurants</h1>
    // let restID = this.props.stampedRestaurants.restID;
    
    console.log('city User ID', this.props.stampedRestaurants);

    return (
        <div>
            <h2>My Stamps</h2>
            <div className='stamped-wrapper'>
            {this.props.stampedRestaurants.map(city => (
                  <div className='stamped-list' key={city.id}>
                      <div key={city.id}>
                      <h2>{city.name}</h2>
                      </div>
                      
                  </div>
              ))
             }
             </div>
            {/* <h1 className='user-restuarants-header'>Stamped</h1>
            
            <div className='rest-list-wrapper'>
               <h3> {visitedRestaurants} </h3>
                
            </div> */}
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