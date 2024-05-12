import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './components/screens/WelcomeScreen';
import FoodDetailScreen from './components/screens/FoodDetailScreen';
import DashboardNavigator from "./components/navigation/DashboardNavigator";
import {FavoriteProvider} from "./components/context/FavoriteProvider/FavoriteProvider";

const Stack = createStackNavigator();

const App = () => {
    return (
        <FavoriteProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={WelcomeScreen}
                                  options={{headerShown: false, headerStyle: {backgroundColor: "red"}}}/>
                    <Stack.Screen name="Dashboard" component={DashboardNavigator} options={{headerShown: false}}/>
                    <Stack.Screen
                        name="FoodDetail"
                        component={FoodDetailScreen}
                        options={({ route }) => ({
                            title: route.params?.name ?? "FoodDetail",
                            headerStyle: {backgroundColor: "transparent", elevation: 0},
                        })}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </FavoriteProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
    },
});


export default App;
