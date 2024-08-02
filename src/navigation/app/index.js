import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SplashScreen1,
  SplashScreen2,
  RestaurantsScreen,
  DiscountedOffersScreen,
  RestaurantDetailScreen,
  ItemDetailScreen,
  Checkout,
  HelpCenter,
  Rewards,
  Vouchers,
  Notifications,
  Address,
  AddAddress,
  Favourites,
  Profile,
  Tracking,
  Report
} from '../../screens';
import AuthNavigator from '../auth';
import BottomTabNavigation from '../bottomTab';

export const Stack = createNativeStackNavigator();

export const commonHeaderOptions = {headerShown: false};

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={'Splash1'}>
      <Stack.Screen
        name={'Splash1'}
        component={SplashScreen1}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Splash2'}
        component={SplashScreen2}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Auth'}
        component={AuthNavigator}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'BottomTabNavigation'}
        component={BottomTabNavigation}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Restaurants'}
        component={RestaurantsScreen}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'DiscountedOffers'}
        component={DiscountedOffersScreen}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'RestaurantDetail'}
        component={RestaurantDetailScreen}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'ItemDetail'}
        component={ItemDetailScreen}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Checkout'}
        component={Checkout}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'HelpCenter'}
        component={HelpCenter}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Rewards'}
        component={Rewards}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Vouchers'}
        component={Vouchers}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Notifications'}
        component={Notifications}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Address'}
        component={Address}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'AddAddress'}
        component={AddAddress}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Favourites'}
        component={Favourites}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Tracking'}
        component={Tracking}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Report'}
        component={Report}
        options={commonHeaderOptions}
      />
    </Stack.Navigator>
  );
}
