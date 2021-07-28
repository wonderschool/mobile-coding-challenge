import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SampleScreen from 'screens/SampleScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sample" component={SampleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
