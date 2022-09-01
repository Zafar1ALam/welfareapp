/** @format */

import App from './Appflow';
import AuthApp from './Authflow';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '../redux/store'

const AppStack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}
          initialRouteName="App">
          <AppStack.Screen name={'Auth'} component={AuthApp} />
          <AppStack.Screen name={'App'} component={App} />
        </AppStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigation;
