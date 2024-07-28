import React from 'react';
import { LoginScreen ,RegisterScreen} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Auth = createNativeStackNavigator();

const AuthNavigator = ({}) => (
  <>
    <Auth.Navigator initialRouteName={'Login'}>
      <Auth.Screen
        name={'Login'}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={'Register'}
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  </>
);

export default AuthNavigator;
