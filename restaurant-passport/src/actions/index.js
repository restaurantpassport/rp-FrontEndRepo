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
    .get('/cities')
    .then(res => {
        console.log('response', res);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.city })
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: FETCH_DATA_FAILURE, 
            payload: err.response.data.error })
    })
}
