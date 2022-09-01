import {
  Splash,
  Login,
  ForgotPassword,
  BackEmail,
  ChangeNewPassword,
  SuccessSignin,
} from '../../screens';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();
const AuthApp = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <AuthStack.Screen name={'Splash'} component={Splash} />
      <AuthStack.Screen name={'Login'} component={Login} />
      <AuthStack.Screen name={'ForgotPassword'} component={ForgotPassword} />
      <AuthStack.Screen name={'BackEmail'} component={BackEmail} />
      <AuthStack.Screen name={'SuccessSignin'} component={SuccessSignin} />

      <AuthStack.Screen
        name={'ChangeNewPassword'}
        component={ChangeNewPassword}
      />
    </AuthStack.Navigator>
  );
};

export default AuthApp;
