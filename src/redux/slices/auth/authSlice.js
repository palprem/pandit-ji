import api from "@/services/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk("auth/registerUser", async (userData, thankApi) => {
    try {
        const response = await api.post('/register', userData);
        return response.data;
    } catch (error) {
        return thankApi.rejectWithValue(error.response?.data);
    }
})


export const loginUser = createAsyncThunk("auth/loginUser", async (userData, thankApi) => {
    try {
        const response = await api.post('/login', userData);
        return response.data;
    } catch (error) {
        return thankApi.rejectWithValue(error.response?.data);
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        message: null,
        loading: null,
        error: null,
        registered: false,
    },
    reducers: {
        resetAuthState: (state) => {
            state.loading = false;
            state.error = null;
            state.message = null;
        },
        logOut: (state) => {
            state.user = {};
            state.data = null;
            state.error = null;
             state.registered=false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.message = null;
                state.user = {};
                state.loading = true;
                state.error = null;
                state.registered = false;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload?.user;
                state.message = action.payload?.message;
                state.registered = true;

            })
            .addCase(registerUser.rejected, (state, action) => {
                state.user = {};
                state.loading = false;
                state.registered = false;
                state.message = null;
                state.error = action.payload?.error
            })


            // manage login machenishm
            .addCase(loginUser.pending, (state) => {
                state.message = null;
                state.user = {};
                state.loading = true;
                state.error = null;
                state.registered = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload?.user;
                state.message = action.payload?.message;
                state.registered = true;

            })
            .addCase(loginUser.rejected, (state, action) => {
                state.user = {};
                state.loading = false;
                state.registered = false;
                state.message = null;
                state.error = action.payload?.error
            })

            .addCase('PURGE', () => {
                return initialState;
            })
    }
})
export const { resetAuthState, logOut } = authSlice.actions;

export default authSlice.reducer;