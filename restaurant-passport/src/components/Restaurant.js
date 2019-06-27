import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';


import { getRestById, stampRestaurant } from '../actions/index';

class Restaurant extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params
        this.props.getRestById(id)
    };

    stampRestaurant = (e, restaurant) => {
        e.preventDefault();
        this.setState({ stampedRestaurants: restaurant })
        this.props.stampRestaurant(restaurant);
    }



render() {
    console.log('RestID props', this.props.restById);
    return (
        <div className='restaurant-wrapper'>

            <div className='restaurants'>
            <h1>{this.props.restById.name}</h1>
            <h2>{this.props.restById.city}</h2>
            <h2>{this.props.restById.address}</h2>
            <p>{this.props.restById.description}</p>
            </div>

            <div className='restaurant-button'>
            <Button onClick={this.stampRestaurant} color='warning' >Stamp my Portfolio</Button>
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
        { getRestById, stampRestaurant }
    )(Restaurant)
)