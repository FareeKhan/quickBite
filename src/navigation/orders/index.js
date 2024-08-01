import React from 'react';
import {
  OrdersScreen,
  LiveOrders
} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OrderNavigator = ({}) => (
    <Stack.Navigator initialRouteName={'OrdersScreen'}>
      <Stack.Screen
        name={'OrdersScreen'}
        component={OrdersScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'LiveOrders'}
        component={LiveOrders}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
);

export default OrderNavigator;
