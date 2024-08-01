import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../constants/color';
import Icons from '../../assets/icons';
import {
  HomeScreen,
  MyCartScreen,
  AccountScreen,
} from '../../screens';
import OrderNavigator from '../orders';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontFamily: 'Manrope-Regular', fontSize: 13},
        tabBarActiveTintColor: Colors.btnColor,
        tabBarInactiveTintColor: Colors.gray,
        tabBarStyle: {
          backgroundColor: Colors.primary,
          height: 100,
          gap: 23,
          paddingTop: 22,
          borderTopWidth:0
        },
        tabBarHideOnKeyboard:'true'
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <>
                <Icons.HomeIconA />
                <View
                  style={{
                    height: 4,
                    width: 4,
                    borderRadius: 50,
                    backgroundColor: Colors.btnColor,
                    position: 'absolute',
                    bottom: '-85%',
                  }}
                />
              </>
            ) : (
              <Icons.HomeIconNA />
            ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <>
                <Icons.OrdersIconA />
                <View
                  style={{
                    height: 4,
                    width: 4,
                    borderRadius: 50,
                    backgroundColor: Colors.btnColor,
                    position: 'absolute',
                    bottom: '-85%',
                  }}
                />
              </>
            ) : (
              <Icons.OrdersIconNA />
            ),
        }}
      />
      <Tab.Screen
        name="My Cart"
        component={MyCartScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <>
                <Icons.MyCartIconA />
                <View
                  style={{
                    height: 4,
                    width: 4,
                    borderRadius: 50,
                    backgroundColor: Colors.btnColor,
                    position: 'absolute',
                    bottom: '-85%',
                  }}
                />
              </>
            ) : (
              <Icons.MyCartIconNA />
            ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <>
                <Icons.AccountIconA />
                <View
                  style={{
                    height: 4,
                    width: 4,
                    borderRadius: 50,
                    backgroundColor: Colors.btnColor,
                    position: 'absolute',
                    bottom: '-85%',
                  }}
                />
              </>
            ) : (
              <Icons.AccountIconNA />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
