import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";


const Stack = createNativeStackNavigator();

export default function Starwars() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
        name="Home"
        options={{
          headerTitle: "Star Wars",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTitleAlign: "center",
          headerTintColor: "#FFE81F",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
            fontFamily: 'monospace',
          },
        }}
        component={HomeScreen} 
        />


        

      </Stack.Navigator>
    </NavigationContainer>   
  );
};