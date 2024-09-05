import { PERFORM_LOGIN, PERFORM_LOGOUT } from '../actions/authActions';

const initialState = {
    login: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERFORM_LOGIN:
            return {
                ...state,
                login: action.login,
            };
        case PERFORM_LOGOUT:
            return {
                ...state,
                login: action.login,
            };
        default:
            return state;
    }
};

export default authReducer;
