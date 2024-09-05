import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
};
export const authSlice = createSlice({
    name: 'auth2',
    initialState,
    reducers: {
        performLogin(state, action){
            //action can be used to get data which is passed when performLogin will be dispatched
            //for this example for sure we dont need to pass any thing but in case of real login
            // it can be username password
            state.login = true;
        },
        performLogout(state){
            state.login = false;
        }
    }
});
export const authActions = authSlice.actions;