import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	activeIndex: 0,
}

const stackInfoSlice = createSlice({
	name: 'stackInfo',
	initialState,
	reducers: {
		setInfo: (state, action) => {
			state.activeIndex = action.payload
		},
	},
})

export const { setInfo } = stackInfoSlice.actions
export default stackInfoSlice.reducer
