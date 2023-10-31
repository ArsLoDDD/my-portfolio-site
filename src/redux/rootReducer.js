import { combineReducers } from 'redux'
import stackInfoSlice from './slices/stackInfoSlice'

const rootReducer = combineReducers({
	stackInfo: stackInfoSlice,
})

export default rootReducer
