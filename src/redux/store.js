// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { reducer } from './reducer';

// export const store = configureStore({
//   reducer: reducer,
// });

// import { configureStore} from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { contactsReducer } from './contacts/contactsSlice';
// import { authReducer } from './auth/slice';
// import { filterReducer } from './filterSlice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// // Persisting token field from auth slice to localstorage
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import { contactsApi } from 'services/contactsApi';
// import { filterSlice } from './filter';
// import { authPersistedReducer } from './auth';

import { contactsReducer } from './contacts/contactsSlice';
import { authPersistedReducer } from './auth/slice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    filter: filterReducer,
    contacts: contactsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
