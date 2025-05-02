import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CharacterScreen from "./src/screens/CharacterScreen";
import MoviesScreen from "./src/screens/MoviesScreen";         
import StarshipsScreen from "./src/screens/StarshipsScreen"; 

const Stack = createNativeStackNavigator();

export default function Starwars() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTitle: "Star Wars",
            headerStyle: { backgroundColor: "#000000" },
            headerTitleAlign: "center",
            headerTintColor: "#FFE81F",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
              fontFamily: "monospace",
            },
            gestureEnabled: false, 
          }}
        />

        <Stack.Screen 
          name="Detalhes"
          component={CharacterScreen}
          options={{
            headerShown: true,
            headerTitle: "Personagem",
            headerStyle: { backgroundColor: "#000000" },
            headerTitleAlign: "center",
            headerTintColor: "#FFE81F",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
              fontFamily: "monospace",
            },
          }}
        />

        <Stack.Screen 
          name="Movies" 
          component={MoviesScreen} 
          options={{
            headerShown: true,
            headerTitle: "Filmes",
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "#FFE81F",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 26,
              fontFamily: "monospace",
            },
          }}
        />

        <Stack.Screen 
          name="Starships" 
          component={StarshipsScreen} 
          options={{
            headerShown: true,
            headerTitle: "Naves",
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "#FFE81F",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 26,
              fontFamily: "monospace",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
