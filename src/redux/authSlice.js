import {createSlice} from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: true,
    },
    reducers: {
        loginSlice(state) {
            state.auth = false
        },
        logoutSlice(state) {
            state.auth = true
        }
    }
})

export default authSlice.reducer
export const {loginSlice, logoutSlice} = authSlice.actions
