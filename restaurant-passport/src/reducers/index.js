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
REGISTER_FAILURE } from '../actions';

const initialState = {
    registering: false,
    error: '',
    cities: [],
    loggingIn: false,
    fetchingData: false,
    restaurants: [],
    cityFromRestaurant: ''
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
                error: '',
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                loggingIn: false
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
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;