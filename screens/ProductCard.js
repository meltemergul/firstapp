import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView>
            <Searchbar
                style={{ backgroundColor: '#D0BFFF' }}
                placeholder="Ara"
                onChangeText={onChangeSearch}
                value={searchQuery}
            /></SafeAreaView>

    );
};

export default MyComponent;
