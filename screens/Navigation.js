import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Appbar, useTheme } from 'react-native-paper';
import Home from './Home'
import Profile from './Profile';
import Yazılar from './Yazılar';
import Ayarlar from './Settings';
import ProductCard from './ProductCard';

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#504099"
                inactiveColor="#504099"
                barStyle={{ backgroundColor: 'white', color: 'red' }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={({ route }) => ({
                        tabBarLabel: 'Ana Sayfa',
                        tabBarIcon: ({ color }) => (
                            <Image
                                source={
                                    route.name === 'Home'
                                        ? require("../images/home-active2.png")
                                        : require('../images/home.png')
                                }
                                style={{ width: 24, height: 24 }}
                            />
                        ),
                    })}
                />
                <Tab.Screen
                    name="Yazılar"
                    component={ProductCard}
                    options={({ route }) => ({
                        tabBarLabel: 'Yazılar',
                        tabBarIcon: ({ color }) => (
                            <Image
                                source={
                                    route.name === 'Yazılar'
                                        ? require("../images/star.png")
                                        : require('../images/shopping-cart.png')
                                }
                                style={{ width: 24, height: 24 }}
                            />
                        ),
                    })}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={({ route }) => ({
                        tabBarLabel: 'Hesabım',
                        tabBarIcon: ({ color }) => (
                            <Image
                                source={
                                    route.name === 'Profile'
                                        ? require("../images/user-active2.png")
                                        : require('../images/user.png')
                                }
                                style={{ width: 24, height: 24 }}
                            />
                        ),
                    })}
                />
                <Tab.Screen
                    name="Ayarlar"
                    component={Ayarlar}
                    options={({ route }) => ({
                        tabBarLabel: 'Ayarlar',
                        tabBarIcon: ({ color }) => (
                            <Image
                                source={
                                    route.name === 'Ayarlar'
                                        ? require("../images/settings.png")
                                        : require('../images/settings.png')
                                }
                                style={{ width: 24, height: 24 }}
                            />
                        ),
                    })}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}