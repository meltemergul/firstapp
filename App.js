import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import AppNavigator from './screens/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <AppNavigator></AppNavigator>

  )
}