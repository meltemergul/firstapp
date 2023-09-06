import { View, Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import Navigation from './Navigation';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const [text, setText] = React.useState('');
    const navigation = useNavigation();
    const Label = <Text color={styles.labelColor}>Username</Text>;
    return (

        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 30, flex: 2 }}>
                <Image source={require('../images/tuenti-app-logo.png')} style={{ width: 120, height: 120 }} />
                <Text style={styles.headerB}>MBlog </Text>
                <Text style={styles.welcome}>Welcome!</Text>
            </View>
            <View style={{ flex: 2 }}>
                <TextInput style={styles.input}
                    label={Label}
                    backgroundColor="#9c80d9"
                    textColor='white'
                    underlineColor='white'
                    selectionColor='white'
                    cursorColor='white'
                    color="white"
                    theme={{ colors: { text: 'white' } }}
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
            </View>



            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity style={styles.create} ><Text style={{
                    color: '#504099',
                    fontSize: 18
                }}>Create</Text></TouchableOpacity>
            </View>

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
    labelColor: {
        text: 'white',
    },
    headerB: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white',
        flex: 1,
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
        flex: 1
    },
    input: {
        margin: 5,
        color: 'white',
        width: '80%',
        alignSelf: 'center',

    },
    login: {
        marginTop: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        height: 40,
        elevation: 10,
        width: '80%',

    },
    create: {

        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        height: 40,
        elevation: 10,
        width: '40%',
        marginBottom: 15,


    }
});