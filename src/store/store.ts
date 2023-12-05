import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({});

const store = configureStore({
  reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
