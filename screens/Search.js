
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, TextInput, Image, Icon, Button, TouchableOpacity } from 'react-native';
import { FlatList, RefreshControl, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function MyComponent({ route, navigation }) {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [isRefreshing, setisRefreshing] = useState(false);

    useEffect(() => { handleRefresh(); }, []);

    const handleSearch = (text) => {
        const result = data.filter((item) =>
            Object.values(item).some((t) => t.includes(text))
        );
        setSearchData(result);

    }

    const handleRefresh = () => {
        setisRefreshing(true);
        fetch("https://hwasampleapi.firebaseio.com/chats.json")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setisRefreshing(false);
            })
            .catch((err) => console.log(err));

    }
    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.headerB}>MBlog </Text>
            <View style={{ flexDirection: 'row', backgroundColor: "#ddd", borderRadius: 12, height: 40, marginTop: 12 }}>
                <Image source={require('../images/search.png')} style={{ marginStart: 12, width: 24, height: 24, marginTop: 5 }} />
                <TextInput style={{ flex: 1, marginStart: 12 }} placeholder='Ara' onChangeText={(text) => handleSearch(text)} />
            </View>
            <GestureHandlerRootView>
                <FlatList
                    refreshControl={<RefreshControl onRefresh={() => handleRefresh()} refreshing={isRefreshing} />}
                    data={searchData.length === 0 ? data : searchData}
                    ItemSeparatorComponent={() => (<View style={{ backgroundColor: "#ccc", height: 1, marginStart: 50 + 24 }}></View>)}
                    ListHeaderComponent={() => (<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Button onPress={() => console.log()} title="Takip Ettiklerim" />
                        <Button onPress={() => console.log()} title="Yeni Yazılar" />
                    </View>

                    )}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) =>
                    (<TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ padding: 12, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: item.image, width: 50, height: 50 }} style={{ borderRadius: 50 }}
                        />
                        <View style={{ flex: 1, marginStart: 12 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18 }}> {item.name} </Text>
                                <Text style={{ color: "#999" }}>{item.date} </Text>
                            </View>

                        </View>

                    </TouchableOpacity>)

                    } />
            </GestureHandlerRootView>
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

        backgroundColor: '#EEEDED',

    },
});

