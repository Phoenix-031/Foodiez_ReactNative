import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Navigation, RootNavigator } from './navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, LoginScreen, RegisterScreen } from './screens';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      {/* <Navigation /> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header:() => null}}>
          <Stack.Screen name="Home" component={RootNavigator} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
