import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Button, Modal, SafeAreaView, ImageBackground } from 'react-native';
import { FlatList, RefreshControl, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper'
import SQLite from 'react-native-sqlite-storage';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const db = SQLite.openDatabase({ name: 'blog.db', location: 'default' });

const App = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [isRefreshing, setisRefreshing] = useState(false);

    useEffect(() => { handleRefresh(); }, []);

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

            <Text style={styles.header}>MBlog </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Chip icon={(require('../images/heart.png'))} style={{ width: 130, margin: 5, }}>Favorilerim</Chip>
                <Chip icon={(require('../images/clock.png'))} style={{ width: 100, margin: 5 }}>Yeniler</Chip>
                <Chip icon={(require('../images/star.png'))} style={{ width: 100, margin: 5 }}>Popüler</Chip>
            </View>
            <GestureHandlerRootView>
                <FlatList
                    refreshControl={<RefreshControl onRefresh={() => handleRefresh()} refreshing={isRefreshing} />}
                    data={data}
                    ItemSeparatorComponent={() => (<View style={{ backgroundColor: "#ccc", height: 1, marginStart: 50 + 24 }}></View>)}


                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) =>
                    (<TouchableOpacity onPress={() => navigation.navigate('Detay', { item })} style={{ padding: 12, flexDirection: 'row', alignItems: 'center' }}>
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

            {/* <Modal
                animationType="slide"
                transparent={false}
                visible={selectedPost !== null}
            >
                <SafeAreaView style={styles.selectedPostModal}>
                    <Text style={styles.selectedPostTitle}>{selectedPost?.title}</Text>
                    <Image source={selectedPost?.image} style={styles.selectedPostImage} />
                    <Text style={styles.selectedPostContent}>{selectedPost?.content}</Text>
                    <Button title="Kapat" onPress={closePost} />
                </SafeAreaView>
            </Modal> */}

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingBottom: 0,
        backgroundColor: '#EEEDED',

    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#504099',
        marginLeft: 40,

    },
    postList: {
        marginBottom: 20,


    },
    postItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    postImage: {
        width: '90%',
        height: 150,
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    postTitle: {
        fontSize: 16,
        marginLeft: 25,
        fontWeight: 'bold',
    },
    postDescription: {
        fontSize: 14,
        color: '#888',
        marginLeft: 25,
    },
    selectedPostModal: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        height: '90%',

    },
    selectedPostTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'center',
    },
    selectedPostImage: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover',
        marginBottom: 10,
        alignSelf: 'center',
    },
    selectedPostContent: {
        fontSize: 16,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',

    },
});

export default App;
