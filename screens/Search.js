import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {


    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.headerB}>MBlog </Text>
            <TextInput style={{ backgroundColor: '#DBC4F0', marginTop: 10, width: '95%', justifyContent: 'center', alignSelf: 'center', height: 50, borderRadius: 25, paddingLeft: 10, fontSize: 18 }} placeholder='Ara' />


        </SafeAreaView>

    );
};

export default MyComponent;
const styles = StyleSheet.create({
    headerB: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#504099',
        marginLeft: 25,
    },
    container: {
        flex: 1,
        padding: 15,
        paddingBottom: 0,
        backgroundColor: '#EEEDED',

    },
});