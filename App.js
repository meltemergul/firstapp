import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Navigation from './screens/Navigation'
import Home from './screens/Home';
import Login from './screens/Login';
import 'react-native-gesture-handler';
import AppNavigator from './screens/AppNavigator';
export default function App() {
  return (
    <AppNavigator></AppNavigator>

  )
}