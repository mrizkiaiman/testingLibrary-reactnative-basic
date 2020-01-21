import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'

const rootNavigator = createSwitchNavigator({
  CreateAccount,
  Login
})

export default createAppContainer(rootNavigator)