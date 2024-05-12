import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
    // Mock profile data
    const profile = {
        name: 'Sophie Trudeau',
        email: 'sophie.trudeau@example.com',
        contactNumber: '+1 (555) 123-4567',
        address: '24 Sussex Drive, Ottawa, Ontario, Canada',
        profilePicture: require('../../assets/profile-image.png'),
    };

    return (
        <View style={styles.container}>
            <Image source={profile.profilePicture} style={styles.profilePicture} />
            <View style={styles.userInfo}>
                <Text style={styles.title}>{profile.name}</Text>
                <Text style={styles.subtitle}>{profile.email}</Text>
                <Text style={styles.contact}>{profile.contactNumber}</Text>
                <Text style={styles.address}>{profile.address}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop:24,
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 24,
    },
    userInfo: {
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 10,
        width: '90%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 12,
    },
    contact: {
        fontSize: 18,
        marginBottom: 12,
    },
    address: {
        fontSize: 18,
    },
});

export default ProfileScreen;
