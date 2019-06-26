import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';


import { getCities } from '../actions';

class Cities extends React.Component {
    componentDidMount() {
        this.props.getCities()
    };

render() {
    // console.log('cityID', this.props);
    return (
        <div>
            <h2>CITIES</h2>
            {/* {this.props.fetchingData && (
                <div className='keySpinner'>
                    <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
                    <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                    </div>
            )} */}
            <div className='city-list-wrapper'>
                {this.props.cities.map(city => (
                    <div className='city-list' key={city.id}>
                    <Link to={`/cities/${city.id}/restaurants`}>
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