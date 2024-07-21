import { configureStore } from '@reduxjs/toolkit'
import restaurentslice from './slices/restaurentslice'
import menuSlice from './slices/menuslice'
import menuSearchSlice from './slices/searchmenu'
import mostRecommandslice from './slices/mostrecommandslice'
import favoriteSlice from './slices/favoriteslice'

export const store = configureStore({
  reducer: {
    'restaurant': restaurentslice,
    'allMenuDetails': menuSlice,
    'searchMenu': menuSearchSlice,
    'mostRecommand': mostRecommandslice,
    'favoriteMenu': favoriteSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
