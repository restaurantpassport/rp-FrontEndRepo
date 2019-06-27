import { 
LOGIN_START,
LOGIN_SUCCESS,
LOGIN_FAILURE,
FETCH_DATA_START,
FETCH_DATA_SUCCESS,
FETCH_DATA_FAILURE,
FETCH_RESTAURANTS_START,
FETCH_RESTAURANTS_SUCCESS,
FETCH_RESTAURANTS_FAILURE,
REGISTER_START,
REGISTER_SUCCESS,
REGISTER_FAILURE,
FETCH_REST_BYID_START,
FETCH_REST_BYID_SUCCESS,
FETCH_REST_BYID_FAILURE } from '../actions';

const initialState = {
    registering: false,
    error: '',
    cities: [],
    loggingIn: false,
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId'),
    fetchingData: false,
    restaurants: [],
    cityFromRestaurant: '',
    restById: {}
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_START:
            return {
                ...state,
                registering: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                registering: false
            }
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                token: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                token: action.payload,
                userId: action.payload.userId
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: 'LOGIN FAILURE',
                loggingIn: false
            }
        case FETCH_DATA_START:
            return {
                ...state,
                error: '',
                fetchingData: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                cities: action.payload,
                fetchingData: false
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                fetchingData: false,
                cities: [],
                error: action.payload
            }
        case FETCH_RESTAURANTS_START:
            return {
                ...state,
                error: '',
                fetchingData: true
            }
        case FETCH_RESTAURANTS_SUCCESS:
            return {
                ...state,
                error: '',
                restaurants: action.payload.restaurants,
                cityFromRestaurant: action.payload.name,
                fetchingData: false
            }
        case FETCH_RESTAURANTS_FAILURE:
            return {
                ...state,
                fetchingData: false,
                restaurants: [],
                cityFromRestaurant: '',
                error: action.payload
            }
        case FETCH_REST_BYID_START:
            return {
                ...state,
                error: '',
            }
        case FETCH_REST_BYID_SUCCESS:
            return {
                ...state,
                error: '',
                restById: action.payload
            }
        case FETCH_REST_BYID_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;