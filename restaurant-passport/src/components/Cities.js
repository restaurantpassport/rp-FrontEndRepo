import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';


import { getCities } from '../actions';

class Cities extends React.Component {
    componentDidMount() {
        this.props.getCities()
    };

render() {
    console.log('cityID', this.props.cities);
    return (
        <div>
            <h1 className='cities-header'>PASSPORT CITIES</h1>
            
            <div className='city-list-wrapper'>
                {this.props.cities.map(city => (
                    <div className='city-list' key={city.id}>
                    <Link style={{color: 'black'}} to={`/cities/${city.id}/restaurants`}>
                        <div key={city.id}>
                        <h2>{city.name}</h2>
                        
                        </div>
                        </Link> 
                    </div>
                ))}
            </div>
        </div>
    )
}
}

const mapStateToProps = ({ error, cities, fetchingData }) => ({
    error,
    cities,
    fetchingData
});

export default withRouter(
    connect(
        mapStateToProps,
        { getCities }
    )(Cities)
)