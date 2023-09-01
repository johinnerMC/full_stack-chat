import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: 'not-authenticated', //'checking' 'not-authenticated','authenticated'
        uid: 'null',  
        name: 'null',
        email: 'null',
        msg: 'null'
    },
    reducers: {
        login:(state, { payload }) => {
            state.status = 'authenticated'
            state.uid = payload.uid
            state.name = payload.name
            state.email = payload.email
            state.msg = 'null'
        },
        logout:(state, { payload }) => {
            state.status = 'not-authenticated'
            state.uid = 'null'
            state.name = 'null'
            state.email = 'null'
            state.msg = 'null'
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        },
        verificationFailure: (state, { payload }) => {
            state.status = 'not-authenticated'
            state.msg = payload
        }
    }
});

export const { login, logout, checkingCredentials, verificationFailure } = authSlice.actions;