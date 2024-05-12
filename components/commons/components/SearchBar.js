import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const SearchBar = ({onSearch}) => {
    return (
        <TextInput
            style={styles.searchBar}
            placeholder="     Search"
            onChangeText={onSearch}
            placeholderTextColor={"#000"}
        />
    );
};

const styles = StyleSheet.create({
    searchBar: {
        height: 60,
        borderColor: '#D8D8D8',
        borderWidth: 1,
        paddingLeft: 10,
        margin: 10,
        borderRadius: 30,
        paddingHorizontal: 16,
        backgroundColor: "#EFEEEE"
    },
});

export default SearchBar;
