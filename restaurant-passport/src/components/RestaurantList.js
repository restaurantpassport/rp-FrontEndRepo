import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import Restaurant from './Restaurant'
// import { Spinner } from 'reactstrap';

import { getRestaurants } from '../actions';

class RestaurantList extends React.Component {
    componentDidMount() {
        this.props.getRestaurants()
    };


render() {
    console.log('props', this.props)

    //  Map object to an array
    const renObjData = this.props.restaurants.map(function(data, idx) {
        return ([
            <p key={idx}>{data.restName}</p>
        ])
    })
    return (
        <div>
            <h1>{this.props.cityFromRestaurant}</h1>
            
            {/* <h1>{this.props.restaurants}</h1> */}
            {/* {this.props.fetchingData && (
                <div className='keySpinner'>
                    <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
                    <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                    </div>
            )} */}

            <h2>{renObjData}</h2>
            
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