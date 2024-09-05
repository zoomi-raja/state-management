import { dummyFetch } from "../../../../utility/fetch";
import { authActions } from "../authSlice";

export const performLoginThunk = () => {
    return async (dispatch) => {
        try {
            const result = await dummyFetch();
            if (result.auth) {
                dispatch(authActions.performLogin());
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
};