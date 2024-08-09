import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface BlogState {
  data: any | null,
  loading: boolean,
  error: string | null
}

const initialState: BlogState = {
  data: [],
  loading: false,
  error: null
}




  export const getAllBlogs = createAsyncThunk<any, void, { rejectValue: any }>(
    'restaurant/getAllBlogs',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("https://goldfish-app-yhaxv.ondigitalocean.app/api/getBlogs");
        return response.data.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

  // Update the slice to handle the new async thunk
  export const blogSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAllBlogs.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllBlogs.fulfilled, (state, action: PayloadAction<any>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = null;
        })
        .addCase(getAllBlogs.rejected, (state, action: PayloadAction<any>) => {
          state.data = [];
          state.loading = false;
          state.error = action.payload;
        })
    },
  });



export default blogSlice.reducer;
