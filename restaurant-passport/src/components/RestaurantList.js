import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
// import VisitedRestaurants from './VisitedRestaurants';
// import Restaurant from './Restaurant'
// import { Spinner } from 'reactstrap';

import { getRestaurants } from '../actions';

class RestaurantList extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params
        this.props.getRestaurants(id)
    };


render() {
    console.log('getRest props', this.props)
    return (
        <div>
            <h1>{this.props.cityFromRestaurant}</h1>

            <div className='xy'>
                {this.props.restaurants.map(item => (
                    <div className='xyz'  id={item.restID} key={item.restID}>
                    <Link style={{color: 'black'}} to={`/cities/restaurants/${item.restID}`}>
                        <div key={item.restID}>
                        <h2>{item.restName}</h2>
                        </div>
                        </Link> 
                    </div>
                ))}
            </div>
            <div>

                {/* <VisitedRestaurants /> */}

            </div>
            </div>
            )
}}


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