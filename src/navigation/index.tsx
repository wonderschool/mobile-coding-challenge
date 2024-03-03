import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartScreen, MenuScreen, WelcomeScreen } from '@screens';
import { StoreProvider } from '@context';

// Stack Navigator
const Root = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Menu: undefined;
  Cart: undefined;
  Welcome: undefined;
};

/*
  ABSTRACTION AND REUSABILITY
  We can abstract functionality here such as:
  - navigators
  - screen animations
  - screen options
  - screen headers
  We can also add separate context providers for each navigator
*/

/*
  Depending on the application size and complexity,
  the abstractions can be separated into different navigator files if needed
*/
const RootNavigation = () => {
  return (
    <StoreProvider>
      <Root.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          // uses custom header
          headerLeft: null,
        }}
      >
        <Root.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Root.Screen name="Menu" component={MenuScreen} />
        <Root.Screen name="Cart" component={CartScreen} />
      </Root.Navigator>
    </StoreProvider>
  );
};

// App Navigation
// This is the main navigation container
// allows to add multiple navigators
// for authenticated and unauthenticated users
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
