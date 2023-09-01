import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <Text style={styles.headerB}>MBlog </Text>
            <Searchbar
                style={{ backgroundColor: '#DBC4F0', marginTop: 10, }}
                placeholder="Ara"
                onChangeText={onChangeSearch}
                value={searchQuery}
            /></View>

    );
};

export default MyComponent;
const styles = StyleSheet.create({
    headerB: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#504099',
    },
    container: {
        flex: 1,
        padding: 15,
        paddingBottom: 0,
        backgroundColor: '#fff',
    },
});