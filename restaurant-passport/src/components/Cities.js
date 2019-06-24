import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Spinner } from 'reactstrap';

import { getCities } from '../actions';

class Cities extends React.Component {
    componentDidMount() {
        this.props.getCities()
    };

render() {
    return (
        <div>
            {this.props.fetchingData && (
                <div className='keySpinner'>
                    <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
                    <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                    </div>
            )}
            <div>
                {this.props.cities.map(city => (
                    <div key={city.id}>
                        <h2>{city.name}</h2>
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