import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome/Welcome';
import Login from '../screens/login/Login';
import Singup from '../screens/singUp/Singup';
import ForgetPassword from '../screens/forgetPassword/ForgetPassword';





export default function RootStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="welcome" component={Welcome} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="Singup" component={Singup} />
            <Stack.Screen options={{ headerShown: false }} name="ForgetPassword" component={ForgetPassword} />
        </Stack.Navigator>
    )
}
