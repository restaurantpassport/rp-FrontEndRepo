import { LOGIN_START,
LOGIN_SUCCESS,
LOGIN_FAILURE } from '../actions';

const initialState = {
    error: '',
    cities: [],
    loggingIn: false,
    fetchingData: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
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
        default:
            return state;
    }
}

export default reducer;