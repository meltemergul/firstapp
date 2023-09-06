import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Appbar, useTheme } from 'react-native-paper';
import Home from './Home'
import Profile from './Profile';
import Ayarlar from './Settings';
import Search from './Search';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (

        <Tab.Navigator
            initialRouteName="Home"
            tabBaraActiveColor='silver'
            tabBarInactiveTintColor='silver'
            tintColor='black'
            screenOptions={{
                tabBarStyle: { backgroundColor: 'white', paddingBottom: 10, height: 60, color: 'silver', marginBottom: 10 },
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={({ route }) => ({
                    tabBarLabel: 'Ana Sayfa',
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={require('../images/homes.png')}
                            style={{ width: 24, height: 24, tintColor: focused ? '#504099' : color }}
                        />
                    ),
                    tabBarLabelStyle: {
                        color: '#504099', // Change label text color when active
                    },
                })}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={({ route }) => ({
                    tabBarLabel: 'Ara',
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={require('../images/glass.png')
                            }
                            style={{ width: 24, height: 24, tintColor: focused ? '#504099' : color }}
                        />
                    ),
                    tabBarLabelStyle: {
                        color: route.name === 'Search' ? '#504099' : 'color', // Change label text color when active
                    },
                })}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={({ route }) => ({
                    tabBarLabel: 'Blog',
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={require('../images/star.png')
                            }
                            style={{ width: 24, height: 24, tintColor: focused ? '#504099' : color }}
                        />
                    ),
                    tabBarLabelStyle: {
                        color: route.name === 'Profile' ? '#504099' : 'color', // Change label text color when active
                    },
                })}
            />
            <Tab.Screen
                name="Ayarlar"
                component={Ayarlar}
                options={({ route }) => ({
                    tabBarLabel: 'Ayarlar',
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={require('../images/settings.png')
                            }
                            style={{ width: 24, height: 24, tintColor: focused ? '#504099' : color }}
                        />
                    ),
                    tabBarLabelStyle: {
                        color: route.name === 'Ayarlar' ? '#504099' : 'color', // Change label text color when active
                    },
                })}
            />

        </Tab.Navigator >


    );
}
const styles = StyleSheet.create({

    tabBar: {
        height: 40,
        backgroundColor: 'white',
    },
})