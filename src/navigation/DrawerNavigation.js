import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';



import Drawercontent from './DrawerContent';
import { Colors } from '../config/Utils';
import { Home } from '../../screens';
import StackNavigation from './StackNavigation';
import PublicVideo from '../screens/publicVideo/PublicVideo';
import Profile from '../screens/profile/Profile';
import UpdatePassword from '../screens/updatePassword/UpdatePassword';
import AccountSetting from '../screens/account setting/AccountSetting';
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <Drawercontent {...props}
      />}

      screenOptions={{
        swipeEnabled:false,
        gestureEnabled:false,
        drawerLockMode: 'locked-open',
        drawerActiveBackgroundColor: Colors.drawer,
        drawerActiveTintColor: Colors.white,
        drawerInactiveTintColor: Colors.black,
        headerStyle: {
          backgroundColor: Colors.primary,
          elevation:0
        },
        headerTintColor: Colors.black,
        headerTitleAlign: 'center',

        drawerLabelStyle: {
          fontWeight: '600',
          marginLeft: -15,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}

    >

      <Drawer.Screen options={{
        headerShown: false,
        drawerLabel: 'Home',
        headerTitle: 'Home',
        drawerIcon: ({ color, size }) => (
          <Image style={{ width: size, height: size, tintColor: color }} source={require('../assets/home.png')}
          />
        ),
      }} name="Home" component={StackNavigation}
      />
      <Drawer.Screen options={{
        drawerLabel: 'Profile',
        headerTitle: 'Profile',
        drawerIcon: ({ color, size }) => (

          <Image style={{ width: size, height: size, tintColor: color }} source={require('../assets/profile.png')} />
        ),
      }} name="Profile" component={Profile}
      />
      <Drawer.Screen options={{
        drawerLabel: 'Change Password',
        headerTitle: 'Change Password',
        drawerIcon: ({ color, size }) => (
          <Image style={{ width: size, height: size, tintColor: color }} source={require('../assets/password.png')} />
        ),
      }} name="UpdatePassword" component={UpdatePassword}
      />
      <Drawer.Screen options={{
        drawerLabel: 'Account Setting',
        headerTitle: 'Account Setting',
        drawerIcon: ({ color, size }) => (
          <Image style={{ width: size, height: size, tintColor: color }} source={require('../assets/updateProfile.png')} />
        ),
      }} name="AccountSetting" component={AccountSetting}
      />


    </Drawer.Navigator>
  );
}