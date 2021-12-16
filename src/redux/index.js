import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import authSlice from "./authSlice";

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    authSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
