import { combineReducers } from 'redux'

import CounterReducer from './Counter'
import UserReducer from './User'

const allReducers = combineReducers({
    CounterReducer,
    UserReducer
})

export default allReducers