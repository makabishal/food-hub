import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const FoodItem = ({foodItem}) => {
    const initials = foodItem.name.charAt(0) + foodItem.name.charAt(1);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageView}>
                {foodItem.image ? (
                    <Image source={foodItem.image} style={{width: 128, height: 128, resizeMode: 'contain'}}/>
                ) : (
                    <Text style={styles.imageText}>{initials}</Text>
                )}
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.itemName}>{foodItem.name}</Text>
                <Text style={styles.itemPrice}>$ {foodItem.price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 16,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    imageView: {
        width: 128,
        height: 128,
        borderRadius: 100,
        backgroundColor: "#fff",
        shadowColor: "#000",
        elevation: 2,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        alignSelf: "center",
        zIndex: 99,
        overflow: "hidden",
    },
    imageText: {
        fontSize: 48,
        color: 'red',
    },
    bodyContainer: {
        width: 156,
        height: 200,
        borderRadius: 30,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingBottom: "10%",
        paddingHorizontal: 16,
        rowGap: 20
    },
    itemName: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 16,
        color: "#FFA43A",
        fontWeight: "bold",
    },
});

export default FoodItem;
