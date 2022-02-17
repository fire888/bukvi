import {
  SET_MOUS_X,
  SET_MOUS_Y,
  SET_CASES_NUM_BLOCK,
  SET_CASES_NAME_BLOCK,
} from './actionTypes'


export const setMousX = content => ({
  type: SET_MOUS_X,
  payload: {
    content,
  },
})


export const setMousY = content => ({
  type: SET_MOUS_Y,
  payload: {
    content,
  },
})

export const setCasesNumBlock = content => ({
  type: SET_CASES_NUM_BLOCK,
  payload: {
    content,
  },
})

export const setCasesNameBlock = content => ({
  type: SET_CASES_NAME_BLOCK,
  payload: {
    content,
  },
})


