import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogs = createAsyncThunk(
  'blog/fetchBlogs',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/blogs'); // Replace with your actual API URL
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to fetch blogs');
    }
  }
);
