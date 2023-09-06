import React, { useState } from 'react';
import { View, Text, Button, Image, Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const App = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleChooseImage = () => {
        const options = {
            noData: true,
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.uri) {
                setSelectedImage(response);

                // Sunucuya resmi yükle
                const formData = new FormData();
                formData.append('uploadedFile', {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName || 'image.jpg',
                });

                axios
                    .post('http://your-server-url/upload', formData)
                    .then((response) => {
                        console.log('Resim yüklendi:', response.data);
                    })
                    .catch((error) => {
                        console.error('Resim yükleme hatası:', error);
                    });
            }
        });
    };

    return (
        <View>
            {selectedImage && (
                <Image source={{ uri: selectedImage.uri }} style={{ width: 200, height: 200 }} />
            )}
            <Button title="Resim Seç" onPress={handleChooseImage} />
        </View>
    );
};

export default App;
