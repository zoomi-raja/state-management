import { dummyFetch } from "../../../utility/fetch";

export const PERFORM_LOGIN = 'PERFORM_LOGIN';
export const PERFORM_LOGOUT = 'PERFORM_LOGOUT';

export const loginAction = async (dispatch) => {
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
}
