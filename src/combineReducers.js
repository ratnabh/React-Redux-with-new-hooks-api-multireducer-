import {combineReducers} from 'redux'
import fetchReducer from './vehicle'
import fetchReducer1 from './vehicle2'
export default combineReducers({
    fetch:fetchReducer,
    fetch1:fetchReducer1
})