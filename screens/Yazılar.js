import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    const addPost = () => {
        if (editIndex !== -1) {
            // Gönderiyi düzenleme
            const updatedPosts = [...posts];
            updatedPosts[editIndex] = { title, content };
            setPosts(updatedPosts);
            setEditIndex(-1);
        } else {
            // Yeni gönderi ekleme
            setPosts([...posts, { title, content }]);
        }

        // Temizleme
        setTitle('');
        setContent('');
    };

    const editPost = (index) => {
        setTitle(posts[index].title);
        setContent(posts[index].content);
        setEditIndex(index);
    };

    const deletePost = (index) => {
        const updatedPosts = posts.filter((_, i) => i !== index);
        setPosts(updatedPosts);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerB}>MBlog </Text>
            <Text style={styles.header}>Yazı Ekle</Text>
            <TextInput
                style={styles.input}
                placeholder="Başlık"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input2}
                placeholder="İçerik"
                value={content}
                onChangeText={setContent}
                multiline
            />
            <Button color={'#504099'} title={editIndex !== -1 ? 'Gönderiyi Düzenle' : 'Yazı Ekle'} onPress={addPost} />
            {posts.map((post, index) => (
                <View key={index} style={styles.postItem}>
                    <Text style={styles.postTitle}>{post.title}</Text>
                    <Text style={styles.postContent}>{post.content}</Text>
                    <Button color={'#504099'} title="Düzenle" onPress={() => editPost(index)} />
                    <Button color={'#504099'} title="Sil" onPress={() => deletePost(index)} />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingBottom: 0,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    headerB: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#504099',
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#504099',
        borderRadius: 5,

    },
    input2: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'silver',
        borderRadius: 5,
        height: 200,
    },
    postItem: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    postContent: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default App;
