import { dummyFetch } from "../../../../utility/fetch";


// Action Types
export const PERFORM_LOGIN = 'PERFORM_LOGIN';
export const PERFORM_LOGOUT = 'PERFORM_LOGOUT';

// Action Creators
export const performLogin = () => {
    return async (dispatch) => {
        try {
            const result = await dummyFetch();
            if (result.auth) {
                dispatch({
                    type: PERFORM_LOGIN,
                    login: true,
                });
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
};

export const performLogout = () => {
    return {
        type: PERFORM_LOGOUT,
        login: false,
    };
};
