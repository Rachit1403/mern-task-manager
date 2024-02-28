import { createSlice } from '@reduxjs/toolkit'
import { data } from '../../Data/data'

const initialState = {
  tasks: data,
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addTask:(state,action) =>{
      state.tasks = [...state.tasks,action.payload.payload]
      console.log(action.payload.payload);
      console.log(state.tasks);
    },
    removeTask:(state,action) =>{
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }
  },
})

export const {addTask, removeTask} = adminSlice.actions

export default adminSlice.reducer