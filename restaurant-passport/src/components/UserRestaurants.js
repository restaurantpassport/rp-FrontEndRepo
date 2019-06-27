import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserRestaurants } from '../actions';

class UserRestaurants extends React.Component {
    componentDidMount() {
        this.props.getUserRestaurants();
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}