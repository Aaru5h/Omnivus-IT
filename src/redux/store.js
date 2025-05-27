import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blog/blogSlice';

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
  // No need to add middleware manually — thunk is included by default
});

export default store;
