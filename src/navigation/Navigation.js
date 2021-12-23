import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';



export default function Navigation() {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}
