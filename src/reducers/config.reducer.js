const menus = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"]

const initConfig = {
  activatedMenu: menus[0],
  mMenuOpen: false
}

export default (state = initConfig, action) => {
  switch (action.type) {
    case 'TOGGLE_M_MENU_OPEN':
      state = { ...state, mMenuOpen: !state.mMenuOpen }
      break
    case 'SET_MENU':
      state = { ...state, activatedMenu: action.payload }
      break
    default:
      break
  }
  return state
}