import { TOGGLE_MENU, SET_MENU } from './types'

export const toggleMenu = dispatch => () => {
  dispatch({ type: TOGGLE_MENU })
}

export const setMenu = dispatch => menu => {
  dispatch({ type: SET_MENU, payload: menu })
}