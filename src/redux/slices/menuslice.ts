import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { baseUrl } from '../../main'
import axios from 'axios'

export interface MenuState {
  data: any | null,
  loading: boolean,
  error: string | null
}

const initialState: MenuState = {
  data: [],
  loading: false,
  error: null
}

export const fetchAllMenuDetails = createAsyncThunk<any, { id: string }, { rejectValue: any }>(
    'menu/fetchAllMenuDetails',
    async ({ id }, thunkAPI) => {
      try {
        const response = await axios.get(`${baseUrl}/api/allmenu/${id}`)
        // console.log(response.data)
        return response.data
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data)
      }
    }
  )

export const menuSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMenuDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllMenuDetails.fulfilled, (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAllMenuDetails.rejected, (state, action: PayloadAction<any>) => {
        state.data = null;
        state.loading = false;
        state.error = action.payload;
      })
  },
})



export default menuSlice.reducer
