import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, FlatList} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import {useFavorites} from "../context/FavoriteProvider/FavoriteProvider";
import FoodItem from "../commons/components/FoodItem";

const FavoritesScreen = () => {
    const navigation = useNavigation();
    const {favorites} = useFavorites();

    return (
        <>
            {favorites.length === 0 ? (
                <View style={styles.container}>
                    <Icon name={"heart-outline"} color={"#C7C7C7"} size={120} />
                    <Text style={styles.title}>No Favorites yet</Text>
                    <Text style={styles.subtitle}>Hit the orange button down below to add to favorite.</Text>
                    <Button
                        title={"Browse Food"}
                        color={"#FFA43A"}
                        onPress={() => navigation.navigate('Home')}/>
                </View>
            ) : (
                <FlatList
                    data={favorites}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('FoodDetail', { item: item })}>
                            <FoodItem foodItem={item} />
                        </TouchableOpacity>
                    )}
                />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap:16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        paddingHorizontal: 60,
        textAlign:"center"
    },
});

export default FavoritesScreen;
