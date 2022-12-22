import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Menu, ShoppingCart } from './src/screens'
import { SafeAreaView } from 'react-native-safe-area-context'

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
