import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native";

const OrderHistoryScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Icon name={"cart-outline"} color={"#C7C7C7"} size={120}/>
            <Text style={styles.title}>No orders yet</Text>
            <Text style={styles.subtitle}>Hit the orange button down below to Create an order</Text>
            <Button
                title={"Browse Food"}
                color={"#FFA43A"}
                onPress={() => navigation.navigate('Home')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    button: {
        width: "60%",
        height: "20%",
        backgroundColor: "#FFA43A",
        borderRadius: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        paddingHorizontal: 60,
        textAlign: "center"
    },
});

export default OrderHistoryScreen;
