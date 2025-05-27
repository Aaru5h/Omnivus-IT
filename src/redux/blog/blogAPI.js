import { createAsyncThunk } from '@reduxjs/toolkit';
import blogsData from '../../data/data.json';  // adjust relative path if needed

export const fetchBlogs = createAsyncThunk(
  'blog/fetchBlogs',
  async (_, thunkAPI) => {
    try {
      return blogsData.blogs;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch blogs from local JSON');
    }
  }
);
