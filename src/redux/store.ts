import { configureStore } from '@reduxjs/toolkit'
import restaurentslice from './slices/restaurentslice'
import menuSlice from './slices/menuslice'
import menuSearchSlice from './slices/searchmenu'
import mostRecommandslice from './slices/mostrecommandslice'
import favoriteSlice from './slices/favoriteslice'
import blogSlice from './slices/blogslice'
import singleblogslice from './slices/singleblogslice'
import allmenuslice from './slices/allmenuslice'

export const store = configureStore({
  reducer: {
    'restaurant': restaurentslice,
    'allMenuDetails': menuSlice,
    'searchMenu': menuSearchSlice,
    'mostRecommand': mostRecommandslice,
    'favoriteMenu': favoriteSlice,
    'blog': blogSlice,
    'singleBlog': singleblogslice,
    'allcategory' : allmenuslice,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
