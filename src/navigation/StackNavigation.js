import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import PublicVideo from '../screens/PublicVideo';
import PrivateVideo from '../screens/PrivateVideo';




export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={PublicVideo} />
        <Stack.Screen options={{ headerShown: false }} name="Private" component={PrivateVideo} />
      </Stack.Navigator>
    )
}
