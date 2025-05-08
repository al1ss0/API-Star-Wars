import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Personagem from './src/pages/Personagem';
import Filmes from './src/pages/Filmes';
import Naves from './src/pages/Naves';
import Sobre from './src/pages/Sobre';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Personagem" component={Personagem} />
        <Stack.Screen name="Filmes" component={Filmes} />
        <Stack.Screen name="Naves" component={Naves} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}