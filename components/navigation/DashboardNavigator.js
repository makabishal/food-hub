import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../screens/HomeScreen";
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const DashboardNavigator = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Favorites':
                            iconName = focused ? 'heart' : 'heart-outline';
                            break;
                        case 'Order History':
                            iconName = focused ? 'time' : 'time-outline';
                            break;
                        case 'Profile':
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                        default:
                            iconName = 'home';
                            break;
                    }

                    return <Icon name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: '#FFA43A',
                tabBarInactiveTintColor: '#ADADAF',
                tabBarShowLabel: false,
                headerLeft: route.name !== 'Home' ? () => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Home')
                    }}><Icon name="arrow-back" size={24} color="#000"/></TouchableOpacity>
                ) : null,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor:"transparent",
                    shadowColor: "#fff",
                    elevation: 0,
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false, headerStyle:{backgroundColor:"transparent"}}} />
            <Tab.Screen name="Favorites" component={FavoriteScreen}/>
            <Tab.Screen name="Order History" component={OrderHistoryScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    );
};

export default DashboardNavigator;
