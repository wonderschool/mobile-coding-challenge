import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ShoppingCart from './src/screens/ShoppingCart'
import MenuScreen from './src/screens/MenuScreen'

const Tab = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
