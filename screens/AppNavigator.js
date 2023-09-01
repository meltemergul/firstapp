import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login'
import Home from './Home'
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false, animationTypeForReplace: 'push', animation: 'slide_from_right' }} ></Stack.Screen>
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false, animationTypeForReplace: 'push', animation: 'slide_from_right' }} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
}