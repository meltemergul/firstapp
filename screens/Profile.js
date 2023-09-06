import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { createBlogEntry } from './Yazilar'; // Veritabanı işlevini içeren dosya
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const handleSave = async () => {
        try {
            const blogId = await createBlogEntry(title, content, image);
            console.log(`Yazı başarıyla eklendi. ID: ${blogId}`);
            // İşlem başarılı olduysa sayfayı temizleme veya başka bir işlem yapma
        } catch (error) {
            console.error('Yazı eklenirken hata oluştu:', error);
        }
    };

    return (
        <SafeAreaView>
            <Text style={styles.header}>Ekle</Text>
            <TextInput
                placeholder="Başlık"
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="İçerik"
                value={content}
                onChangeText={(text) => setContent(text)}
                style={styles.input}

            />
            <TextInput
                placeholder="Resim URL"
                value={image}
                onChangeText={(text) => setImage(text)}
                style={styles.input}
            />
            <Button title="Kaydet" color={'purple'} onPress={handleSave} />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({


    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#504099',
        borderRadius: 5,
        width: '95%',
        alignSelf: 'center'

    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10,
    },
})