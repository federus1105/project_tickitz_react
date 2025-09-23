import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk untuk update profile
export const editProfile = createAsyncThunk(
  'auth/editProfile',
  async ({ formData, token, currentUser }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_BE_HOST}/profile/edit`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newUserPartial = res.data?.data || {};

      const mergedData = {
        ...currentUser,
        data: [
          {
            ...currentUser.data?.[0],
            ...newUserPartial,
          },
        ],
      };

      return mergedData;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
