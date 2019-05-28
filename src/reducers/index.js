import { createStore, combineReducers } from 'redux';
import config from './config.reducer'

export default createStore(combineReducers({config}))