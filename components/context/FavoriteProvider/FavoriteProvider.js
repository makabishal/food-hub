import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (item) => {
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFavorite = (itemId) => {
        setFavorites((prevFavorites) => prevFavorites.filter(item => item.id!== itemId));
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};
