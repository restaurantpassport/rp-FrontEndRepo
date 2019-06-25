import axios from 'axios';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post('/login', creds)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS })
        return true;
    })
    .catch(err => console.log(err.response))
}

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const getCities = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
    .get('https://rp-backend-web19.herokuapp.com/cities')
    .then(res => {
        console.log('response', res.data);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: FETCH_DATA_FAILURE, 
            payload: err.response.data.error })
    })
}

export const FETCH_RESTAURANTS_START = 'FETCH_RESTAURANTS_START'
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS'
export const FETCH_RESTAURANTS_FAILURE = 'FETCH_RESTAURANTS_FAILURE'

export const getRestaurants = () => dispatch => {
    dispatch({ type: FETCH_RESTAURANTS_START });
    axios
    .get('https://rp-backend-web19.herokuapp.com/cities/1/restaurants')
    .then(res => {
        console.log('data', res.data);
        console.log('restaurants', res.data.restaurants);
        dispatch({ type: FETCH_RESTAURANTS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log('error', err.response);
        dispatch({ type: FETCH_RESTAURANTS_FAILURE, 
            payload: err.response })
    })
}
