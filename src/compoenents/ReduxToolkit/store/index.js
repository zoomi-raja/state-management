import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";



const store = configureStore({
    //reducer: counterSlice.reducer can be used for single reducer but we will use it as we have multiple reducers
    reducer: {
        auth2: authSlice.reducer
    }
});
export default store;