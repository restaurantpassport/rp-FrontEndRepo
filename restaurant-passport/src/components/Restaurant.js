import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';


import { getRestById, stampRestaurant, getUserRestaurants } from '../actions/index';

class Restaurant extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params
        this.props.getRestById(id)
    };

    stampRestaurant = e => {
        let user_id = parseInt(localStorage.getItem('userId'));
        let restaurant_id = parseInt(this.props.restById.id);
        e.preventDefault();
        this.setState({ 
            ...this.state })
        this.props.stampRestaurant({user_id: user_id, restaurant_id: restaurant_id});
    }


    // getUserRestaurants = e => {
    //     e.preventDefault();
    //     this.props.getUserRestaurants()
    // }


render() {
    let userID = localStorage.getItem('userId');
    console.log('RestID Number', this.props.restById.id);
    console.log('User Id #', userID);
    return (
        <div className='restaurant-wrapper'>

            <div className='restaurants'>
            <h1>{this.props.restById.name}</h1>
            <h2>{this.props.restById.city}</h2>
            <h2>{this.props.restById.address}</h2>
            <p>{this.props.restById.description}</p>
            </div>
            <div className='restaurant-button'>
            <Button onClick={this.stampRestaurant} color='warning' >Stamp my Passport</Button>
            {/* <h2>{userID}</h2> */}
            </div>
           
        </div>
    )
}
}

const mapStateToProps = ({ error, restById, stampedRestaurants }) => ({
    error,
    restById,
    stampedRestaurants
});

export default withRouter(
    connect(
        mapStateToProps,
        { getRestById, stampRestaurant, getUserRestaurants }
    )(Restaurant)
)