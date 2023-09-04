import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image, SafeAreaView, ImageBackground } from 'react-native';
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

        <SafeAreaView style={styles.container}>


            <Text style={styles.headerB}>MBlog </Text>
            <Text style={styles.headerH}>Hesabım</Text>

            <View style={{
                flexDirection: 'row', backgroundColor: '#ffff', borderRadius: 10,
                padding: 5, paddingTop: 10, paddingBottom: 10, alignSelf: 'center', width: '90%', marginTop: 10
            }}>

                <View style={{ justifyContent: 'center', marginRight: 10, marginLeft: 5 }}><Avatar.Text size={50} label="ME" /></View>
                <Card style={{ width: '65%', backgroundColor: '#DBC4F0' }}>
                    <Card.Content>
                        <Text variant="titleLarge" style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Meltem ERGÜL</Text>
                        <Text variant="bodyMedium" style={{ color: 'black' }}>meltemergul1@gmail.com</Text>
                    </Card.Content>
                </Card>
                <TouchableOpacity style={{ justifyContent: 'center', marginLeft: 15, marginTop: 15, borderRadius: 40, width: 40, height: 40, alignItems: 'center' }}>
                    <Image source={require("../images/notification.png")} style={{ width: 30, height: 30, }} />
                </TouchableOpacity>

            </View>
            <View style={{
                marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', width: '90%', height: 120,
                borderRadius: 10, marginBottom: 15, alignSelf: 'center', alignContent: 'center', alignItems: 'center'
            }}>

                <TouchableOpacity style={{ width: 90, alignItems: 'center', marginTop: 10 }}>
                    <Image source={require("../images/clock.png")} style={{ width: 35, height: 35, marginBottom: 5 }} />
                    <Text style={styles.text}>Önceden</Text>
                    <Text style={styles.text}>Gezilenler</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 90, alignItems: 'center', marginTop: 10 }}>
                    <Image source={require("../images/coupon.png")} style={{ width: 35, height: 35, marginBottom: 5 }} />
                    <Text style={styles.text}>İndirim </Text>
                    <Text style={styles.text}> Kuponları</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 90, alignItems: 'center', marginTop: 10 }}>
                    <Image source={require("../images/email.png")} style={{ width: 35, height: 35, marginBottom: 5 }} />
                    <Text style={styles.text}>Gelen</Text>
                    <Text style={styles.text}> Mesajlar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 10,
    },
    headerH: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 40,
    },
    headerB: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 40,
        color: '#504099',
    },

    settingItem: {
        flexDirection: 'row',
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    settingLabel: {
        fontSize: 18,
    },
    footer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

});

export default SettingsScreen;
