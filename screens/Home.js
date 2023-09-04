import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Button, Modal, SafeAreaView, ImageBackground } from 'react-native';
import { Chip } from 'react-native-paper'

const initialPosts = [
    {
        id: '1',
        title: 'En Popüler 10 Programlama Dili',
        content: 'Bugünün teknoloji çağında, bilgisayar programcılığı, sadece birkaç kişinin sahip olduğu özel bir yetenek değil, birçok BT işinde gereken bir beceridir.',
        image: require('../images/code.jpg'), // Resmin yolu
    },
    {
        id: '2',
        title: 'Algoritmalar',
        content: 'İçerik 2...',
        image: require('../images/algorithm.jpg'), // Resmin yolu
    },
    {
        id: '3',
        title: 'En iyi Kod Editörleri',
        content: 'İçerik 3...',
        image: require('../images/editor.jpg'), // Resmin yolu
    },
];

const App = () => {
    const [posts, setPosts] = useState(initialPosts);
    const [selectedPost, setSelectedPost] = useState(null);


    const closePost = () => {
        setSelectedPost(null);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>MBlog </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Chip icon={(require('../images/heart.png'))} style={{ width: 130, margin: 5, }}>Favorilerim</Chip>
                <Chip icon={(require('../images/clock.png'))} style={{ width: 100, margin: 5 }}>Yeniler</Chip>
                <Chip icon={(require('../images/star.png'))} style={{ width: 100, margin: 5 }}>Popüler</Chip>
            </View>
            <ScrollView style={styles.postList}>
                {posts.map((post) => (
                    <TouchableOpacity
                        key={post.id}
                        style={styles.postItem}
                        onPress={() => setSelectedPost(post)}
                    >
                        <Image source={post.image} style={styles.postImage} />
                        <Text style={styles.postTitle}>{post.title}</Text>
                        <Text style={styles.postDescription}>{post.content}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Modal
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
            </Modal>

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
        width: '90%',
        alignSelf: 'center'
    },
});

export default App;
