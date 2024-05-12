import React, {useState} from 'react';
import {Button, Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import {useFavorites} from "../context/FavoriteProvider/FavoriteProvider";

const FoodDetailScreen = () => {
    const route = useRoute();
    const {item} = route.params;

    const {favorites, addFavorite, removeFavorite} = useFavorites();

    const [isFavorite, setIsFavorite] = useState(false);

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const [orderToast, setOrderToast] = useState(false);
    const [orderMessage, setOrderMessage] = useState('Order Placed Successfully !!!');

    const initials = item.name.charAt(0) + item.name.charAt(1);

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFavorite(item);
            setToastMessage("Removed from Favorites");
            setShowToast(true);
            setIsFavorite(false);
        } else {
            addFavorite(item);
            setToastMessage("Added to favorites");
            setShowToast(true);
            setIsFavorite(true);
        }

        const isItemInFavorites = favorites.some(favorite => favorite.id === item.id);
        setIsFavorite(isItemInFavorites);

        setTimeout(() => setShowToast(false), 1500);
    };

    const placeOrder = () => {
        setOrderToast(true);
        setTimeout(() => {
            setOrderToast(false);
            setOrderMessage("Order Placed Successfully !!!");
        }, 1500);
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor={"red"}/>
                <View style={styles.image}>
                    {item.image ? (
                        <Image source={item.image} style={{height: 300, resizeMode: 'contain'}}/>
                    ) : (
                        <Text style={styles.title}>{initials}</Text>
                    )}
                </View>
                <View style={styles.header}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.price}>Price: ${item.price}</Text>
                </View>
                <TouchableOpacity style={styles.favoritesButton} onPress={toggleFavorite}>
                    <Icon name={isFavorite ? 'heart' : 'heart-outline'} size={32} color={isFavorite ? 'red' : 'grey'}/>
                </TouchableOpacity>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={showToast}
                >
                    <View style={styles.toastContainer}>
                        <Text style={styles.toastText}>{toastMessage}</Text>
                    </View>
                </Modal>
            </ScrollView>
            <View style={{position: "absolute", bottom: 30, left: 30, right: 30}}>
                <Button
                    title={"Place Order"}
                    color={"#FFA43A"}
                    onPress={placeOrder}
                />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={orderToast}
                >
                    <View style={styles.orderToastContainer}>
                        <Text style={styles.orderToastText}>{orderMessage}</Text>
                    </View>
                </Modal>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    image: {
        width: "auto",
        height: 300,
        backgroundColor: "white",
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: "center",
        alignItems: "center"
    },
    details: {
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
    },
    price: {
        fontSize: 22,
        color: "#FFA43A",
        fontWeight: "bold",
        marginTop: 10,
    },
    favoritesButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 100,
    },
    toastContainer: {
        position: 'absolute',
        bottom: 40,
        left: 30,
        right: 30,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    toastText: {
        fontSize: 16,
    },
    orderToastContainer: {
        backgroundColor: '#EEEEEE95',
        borderRadius: 10,
        padding: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderToastText: {
        backgroundColor: "white",
        padding: 24,
        borderRadius: 16,
        borderStyle: "dotted",
        borderWidth: 2,
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFA43A"
    },
});

export default FoodDetailScreen;
