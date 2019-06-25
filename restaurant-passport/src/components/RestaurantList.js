import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Restaurant from './Restaurant'
// import { Spinner } from 'reactstrap';

import { getRestaurants } from '../actions';

class RestaurantList extends React.Component {
    componentDidMount() {
        this.props.getRestaurants()
    };

render() {
    return (
        <div>
            <h1>{this.props.cityFromRestaurant}</h1>
            <h1>{this.props.restaurants}</h1>
            {/* <h2>CITIES!!!</h2> */}
            {/* {this.props.fetchingData && (
                <div className='keySpinner'>
                    <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
                    <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                    </div>
            )} */}
            
            {/* <div>
                {this.props.resturants.map(city => (
                    <div key={city.restID}>
                        <h2>{city.restName}</h2>
                        </div>
                ))}
            </div> */}
                
            
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