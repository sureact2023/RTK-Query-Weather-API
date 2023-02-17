import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState:{
    searchTerm: ''
  },
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) =>{
        state.searchTerm = action.payload
    }
  },
})

export const { setSearchTerm } = searchSlice.actions

function x(){
  function y (){
    function z (){}
  }
}