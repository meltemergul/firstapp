// ItemDetailScreen.js

import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Detay = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={{ flex: 1, marginTop: 18 }}>
            <Image source={{ uri: item.image }} style={{ width: 400, height: 200, borderRadius: 25, alignSelf: 'center' }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.date}</Text>
            {/* Display other item details here */}
        </View>
    );
};



Detay.navigationOptions = ({ navigation }) => ({
    title: 'Detay', // Set the title of the header
    headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} >
            <Image source={require('../images/folder.png')} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
    ),
});

export default Detay;
