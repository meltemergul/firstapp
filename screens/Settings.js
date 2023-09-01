import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image } from 'react-native';
import { Avatar, Card, IconButton, List, MD3Colors } from 'react-native-paper';
const SettingsScreen = () => {
    const [showPosts, setShowPosts] = useState(true);
    const [showComments, setShowComments] = useState(true);
    const [showLikes, setShowLikes] = useState(true);

    const handleTogglePosts = () => {
        setShowPosts(!showPosts);
    };

    const handleToggleComments = () => {
        setShowComments(!showComments);
    };
    const handleToggleLikes = () => {
        setShowComments(!showLikes);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.headerB}>MBlog </Text>
            <Text style={styles.header}>Hesabım</Text>

            <View style={{ flexDirection: 'row' }}>

                <View style={{ justifyContent: 'center', marginRight: 10 }}><Avatar.Text size={50} label="ME" /></View>
                <Card style={{ width: '70%', backgroundColor: '#DBC4F0' }}>
                    <Card.Content>
                        <Text variant="titleLarge" style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Meltem ERGÜL</Text>
                        <Text variant="bodyMedium" style={{ color: 'black' }}>meltemergul1@gmail.com</Text>
                    </Card.Content>
                </Card>
                <TouchableOpacity style={{ justifyContent: 'center', marginLeft: 10, marginTop: 15, backgroundColor: 'white', borderRadius: 40, width: 40, height: 40, alignItems: 'center' }}>
                    <Image source={require("../images/notification.png")} style={{ width: 30, height: 30, }} />
                </TouchableOpacity>

            </View>
            <View style={{
                marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#EEEEEE', width: '100%', height: 100, borderRadius: 10, marginBottom: 15
            }}>

                <TouchableOpacity style={{ width: 90, alignItems: 'center', marginTop: 10 }}>
                    <Image source={require("../images/clock.png")} style={{ width: 30, height: 30, marginBottom: 5 }} />
                    <Text style={styles.text}>Önceden</Text>
                    <Text style={styles.text}>Gezilenler</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 90, alignItems: 'center', marginTop: 10 }}>
                    <Image source={require("../images/coupon.png")} style={{ width: 30, height: 30, marginBottom: 5 }} />
                    <Text style={styles.text}>İndirim </Text>
                    <Text style={styles.text}> Kuponları</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 90, alignItems: 'center', marginTop: 10 }}>
                    <Image source={require("../images/email.png")} style={{ width: 30, height: 30, marginBottom: 5 }} />
                    <Text style={styles.text}>Gelen</Text>
                    <Text style={styles.text}> Mesajlar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.header}>Ayarlar</Text>
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Gönderileri Göster</Text>
                <Switch
                    value={showPosts}
                    onValueChange={handleTogglePosts}

                />
            </View>
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Yorumları Göster</Text>
                <Switch
                    value={showComments}
                    onValueChange={handleToggleComments}

                />
            </View>
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Beğenileri Göster</Text>
                <Switch
                    value={showLikes}
                    onValueChange={handleToggleLikes}

                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,

    },

    headerB: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#504099',
    },

    settingItem: {
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    settingLabel: {
        fontSize: 18,
    },
});

export default SettingsScreen;
