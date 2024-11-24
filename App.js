import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font'; // Para carregar fontes personalizadas
import TelaEntrada from './screens/telaEntrada';
import TelaMenu from './screens/telaMenu';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Carregar fontes
  const loadFonts = async () => {
    await Font.loadAsync({
      'HindMadurai-Bold': require('./assets/fonts/HindMadurai-Bold.ttf'),
      'HindMadurai-Light': require('./assets/fonts/HindMadurai-Light.ttf'),
    });
  };

  useEffect(() => {
    loadFonts()
      .then(() => setFontsLoaded(true))
      .catch((err) => console.log('Erro ao carregar fontes:', err));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaEntrada">
        <Stack.Screen name="TelaEntrada" component={TelaEntrada} options={{ headerShown: false }} />
        <Stack.Screen name="TelaMenu" component={TelaMenu} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
