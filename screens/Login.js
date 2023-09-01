import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import Navigation from './Navigation';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const [text, setText] = React.useState('');
    const navigation = useNavigation();
    const label = <Text color='white'>{label}</Text>
    return (

        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80, }}>
                <Image source={require('../images/tuenti-app-logo.png')} style={{ width: 120, height: 120 }} />
                <Text style={styles.headerB}>MBlog </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.welcome}>Welcome!</Text>
            </View>
            <TextInput style={styles.input}
                label="Username "
                backgroundColor="#9F91CC"
                textColor='white'
                underlineColor='white'
                selectionColor='white'
                cursorColor='white'
                color="white"
            />
            <TextInput style={styles.input}
                label="Password"
                backgroundColor="#9F91CC"
                textColor='white'
                underlineColor='white'
                color='white'
                cursorColor='white'
            />
            <TouchableOpacity style={styles.login} onPress={() => { navigation.navigate('Home') }}><Text style={{
                color: '#504099',
                fontSize: 18
            }}>Log In</Text></TouchableOpacity>

        </View>

    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 15,
        paddingBottom: 0,
        backgroundColor: '#9F91CC',
    },
    headerB: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white',
    },
    welcome: {
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: 30,
    },
    input: {
        margin: 5,
        color: 'white',

    },
    login: {
        marginTop: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        height: 50,
        elevation: 30,
        width: '80%',
    }
});