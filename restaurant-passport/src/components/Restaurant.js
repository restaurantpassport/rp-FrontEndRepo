import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';


import { getRestById } from '../actions';

class Restaurant extends React.Component {
    componentDidMount() {
        this.props.getRestById()
    };

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
            <Button color='warning' >Stamp my Portfolio</Button>
            </div>
           
        </div>
    )
}
}

const mapStateToProps = ({ error, restById }) => ({
    error,
    restById
});

export default withRouter(
    connect(
        mapStateToProps,
        { getRestById }
    )(Restaurant)
)