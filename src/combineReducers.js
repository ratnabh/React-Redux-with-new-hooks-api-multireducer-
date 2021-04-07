import {combineReducers} from 'redux'
import fetchReducer from './speechReducer'
export default combineReducers({
    fetch:fetchReducer,
})