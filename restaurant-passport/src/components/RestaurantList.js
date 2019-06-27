import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
// import Restaurant from './Restaurant'
// import { Spinner } from 'reactstrap';

import { getRestaurants } from '../actions';

class RestaurantList extends React.Component {
    componentDidMount() {
        this.props.getRestaurants()
    };


render() {
    console.log('getRest props', this.props)

    //  Map object to an array
    const renObjData = this.props.restaurants.map(function(data, idx) {
        return ([
            <p key={idx}>{data.restName}</p>
        ])
    })
    return (
        <div>
            <h1>{this.props.cityFromRestaurant}</h1>


            {/* <Link to={`/restaurants/${data.id}`}> */}
            <h2>{renObjData}</h2>
            {/* </Link> */}
            
        </div>
    )
}
}


const mapStateToProps = ({ error, restaurants, fetchingData, cityFromRestaurant }) => ({
    error,
    restaurants,
    fetchingData,
    cityFromRestaurant
});

export default withRouter(
    connect(
        mapStateToProps,
        { getRestaurants }
    )(RestaurantList)
)