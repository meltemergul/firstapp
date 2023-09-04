import { View, Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import Navigation from './Navigation';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const [text, setText] = React.useState('');
    const navigation = useNavigation();
    const label = <Text color='white'>{label}</Text>
    return (

        <SafeAreaView style={styles.container}>


            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80, }}>
                <Image source={require('../images/tuenti-app-logo.png')} style={{ width: 120, height: 120 }} />
                <Text style={styles.headerB}>MBlog </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.welcome}>Welcome!</Text>
            </View>
            <TextInput style={styles.input}
                label="Username"
                backgroundColor="#9c80d9"
                textColor='white'
                underlineColor='white'
                selectionColor='white'
                cursorColor='white'
                color="white"
            />
            <TextInput style={styles.input}
                label="Password"
                backgroundColor="#9c80d9"
                textColor='white'
                underlineColor='white'
                color='white'
                cursorColor='white'
            />
            <TouchableOpacity style={styles.login} onPress={() => { navigation.navigate('Navigation') }}><Text style={{
                color: '#504099',
                fontSize: 18,
            }}>Log In</Text></TouchableOpacity>
            <Text style={styles.link}>Forgot password?</Text>
            <TouchableOpacity style={styles.create} ><Text style={{
                color: '#504099',
                fontSize: 18
            }}>Create</Text></TouchableOpacity>

        </SafeAreaView>

    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 15,
        paddingBottom: 0,
        backgroundColor: '#9c80d9',
    },
    headerB: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white',
    },
    link: {
        fontSize: 14,
        marginTop: 10,
        color: 'white',
        alignItems: 'center',
        alignSelf: 'center'
    },
    welcome: {
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: 60,
    },
    input: {
        margin: 5,
        color: 'white',

    },
    login: {
        marginTop: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        height: 50,
        elevation: 10,
        width: '90%',
    },
    create: {
        marginTop: 190,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        height: 50,
        elevation: 10,
        width: '40%',

    }
});