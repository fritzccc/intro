import { TOGGLE_MENU, SET_MENU } from '../actions/types'

const menus = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"]

const initConfig = {
  menus,
  activatedMenu: menus[0],
  menuExpanded: false
}

export default (state = initConfig, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      state = { ...state, menuExpanded: !state.menuExpanded }
      break
    case SET_MENU:
      state = { ...state, activatedMenu: action.payload, menuExpanded: false }
      break
    default:
      break
  }
  return state
}