import React, { useEffect, useState } from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FoodItem from '../../components/commons/components/FoodItem';
import SearchBar from '../../components/commons/components/SearchBar';
import { fetchMockFoodData } from '../../services/foodService';
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    const [foodItems, setFoodItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const loadFoodItems = async () => {
            const data = await fetchMockFoodData();
            setFoodItems(data);
        };

        loadFoodItems();
    }, []);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Delicious</Text>
                <Text style={styles.title}>Food For You</Text>
            </View>
            <View style={styles.searchBarContainer}>
                <SearchBar onSearch={setSearchQuery} />
            </View>
            <FlatList
                data={foodItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('FoodDetail', { item: item })}>
                        <FoodItem foodItem={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexGrow:1,
    },
    titleContainer:{marginVertical:32},
    title: {
        fontSize:34,
        fontWeight: 'bold',
        paddingHorizontal:32,
    },
    searchBarContainer:{
        marginHorizontal:32
    }
});

export default HomeScreen;
