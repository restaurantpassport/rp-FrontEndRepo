

import signUpAxios from 'axios';
import axios from '../Authentication/AxiosAuth';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios()
    // const user_id = localStorage.getItem(${userId})
    .post('https://rp-backend-web19.herokuapp.com/users/login', creds)
    .then(res => { console.log('token', res.data.token);
        console.log('userId', res.data.userId);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.userId);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: err.message
        });
      });
}

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = userInfo => dispatch => {
    dispatch({ type: REGISTER_START });
    signUpAxios
    .post('https://rp-backend-web19.herokuapp.com/users', userInfo)
    .then(res => {
        console.log('register', res.data);
        dispatch({ type: REGISTER_SUCCESS })
    })
    .catch(err => {
        console.log(err)
    })
}

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const getCities = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios()
    .get('https://rp-backend-web19.herokuapp.com/cities')
    .then(res => {
        console.log('response', res.data);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: FETCH_DATA_FAILURE, 
            payload: err.response })
    })
}

export const FETCH_RESTAURANTS_START = 'FETCH_RESTAURANTS_START'
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS'
export const FETCH_RESTAURANTS_FAILURE = 'FETCH_RESTAURANTS_FAILURE'

export const getRestaurants = id => dispatch => {
    dispatch({ type: FETCH_RESTAURANTS_START });
    axios()
    .get(`https://rp-backend-web19.herokuapp.com/cities/${id}/restaurants`)
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

export const FETCH_REST_BYID_START = 'FETCH_REST_BYID_START'
export const FETCH_REST_BYID_SUCCESS = 'FETCH_REST_BYID_SUCCESS'
export const FETCH_REST_BYID_FAILURE = 'FETCH_REST_BYID_FAILURE'

export const getRestById = id => dispatch => {
    dispatch({ type: FETCH_REST_BYID_START });
    axios()
    .get(`https://rp-backend-web19.herokuapp.com/cities/restaurants/${id}`)
    .then(res => {
        console.log('rest byId response', res.data);
        dispatch({ type: FETCH_REST_BYID_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: FETCH_REST_BYID_FAILURE, 
            payload: err.response })
    })
}

export const GET_USER_RESTAURANTS_START = 'GET_USER_RESTAURANTS_START'
export const GET_USER_RESTAURANTS_SUCCESS = 'GET_USER_RESTAURANTS_SUCCESS'
export const GET_USER_RESTAURANTS_FAILURE = 'GET_USER_RESTAURANTS_FAILURE'

export const getUserRestaurants = () => dispatch => {
    dispatch({ type: GET_USER_RESTAURANTS_START });
    axios()
    .get(`https://rp-backend-web19.herokuapp.com/manyToMany/43`)
    .then(res => {
        console.log('user restaurants', res.data);
        dispatch({ type: GET_USER_RESTAURANTS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: GET_USER_RESTAURANTS_FAILURE,
        payload: err.response })
    })
}

export const STAMP_RESTAURANT_START = 'STAMP_RESTAURANT_START'
export const STAMP_RESTAURANT_SUCCESS = 'STAMP_RESTAURANT_SUCCESS'
export const STAMP_RESTAURANT_FAILURE = 'STAMP_RESTAURANT_FAILURE'

export const stampRestaurant = (userId, restaurant) => dispatch => {
    dispatch({ type: STAMP_RESTAURANT_START });
    console.log('stamps action', userId, restaurant);
    axios()
    .post(`https://rp-backend-web19.herokuapp.com/manyToMany/`, userId, restaurant)
    .then(res => {
        console.log('stamp passport', res.data);
        dispatch({ type: STAMP_RESTAURANT_SUCCESS, payload: res })
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: STAMP_RESTAURANT_FAILURE, 
            payload: err.response })
    })
}
