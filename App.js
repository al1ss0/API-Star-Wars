import React from "react";
import { createNativeStackNavigator, NavigationContainer } from "@react-navigation/native-stack";
import CharacterScreen from "./src/screens/CharacterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MovieScreen from "./src/screens/MovieScreen";
import StarshipScreen from "./src/screens/StarshipScreen";


const Stack = createNativeStackNavigator();

export default function Starwars() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Character"
        component={HomeScreen} />

        <Stack.Screen 
        name="CharacterDetail" 
        component={CharacterScreen} />

        <Stack.Screen 
        name="Movie" 
        component={MovieScreen} />

        <Stack.Screen 
        name="Starship" 
        component={StarshipScreen} />

      </Stack.Navigator>
    </NavigationContainer>   
  );
};