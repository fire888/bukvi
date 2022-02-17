import { combineReducers } from 'redux'
import { mousReducer } from './mous/Mous'

export const rootReducer = combineReducers({
  MousX: mousReducer,
})
