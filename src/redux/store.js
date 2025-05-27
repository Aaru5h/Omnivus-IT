import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Import thunk
import blogReducer from './blog/blogSlice'; // Your blog slice

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), // Add thunk here
});

export default store;
