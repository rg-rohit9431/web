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
interface searchData{
    id: string, menuId: string 
}

export const searchMenuDetails = createAsyncThunk<any, searchData , { rejectValue: any }>(
    'menu/searchMenuDetails',
    async ({ id ,menuId }, thunkAPI) => {
      try {
        const response = await axios.get(`${baseUrl}/api/searchMenuItems/${id}/${menuId}`)
        // console.log(response.data)
        return response.data
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data)
      }
    }
  )

export const menuSearchSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMenuDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMenuDetails.fulfilled, (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(searchMenuDetails.rejected, (state, action: PayloadAction<any>) => {
        state.data = null;
        state.loading = false;
        state.error = action.payload;
      })
  },
})



export default menuSearchSlice.reducer
