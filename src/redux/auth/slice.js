import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]() {},
    [register.fulfilled](state, { payload }) {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]() {},
    [logIn.pending]() {},
    [logIn.fulfilled](state, { payload }) {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]() {},

    [logOut.pending]() {},
    [logOut.fulfilled]() {
      return initialState;
    },
    [logOut.rejected]() {},

    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authPersistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
