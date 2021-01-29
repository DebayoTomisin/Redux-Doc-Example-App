import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Cycler Jacobs' },
  { id: '1', name: 'Tomisin Demmy' },
  { id: '2', name: 'Andre Drummound' },
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default userSlice.reducer
