import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            <StatusBar hidden/>
            <ImageBackground source={require('../../assets/welcome.png')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Dashboard')}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: '25%',
    },
    button: {
        width: '70%',
        height: '10%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    buttonText: {
        color: '#FF460A',
        fontSize: 16,
    },
});

export default WelcomeScreen;
