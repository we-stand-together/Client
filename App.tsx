import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './pages/Signup';
import Main from './pages/Main';
import { GlobalContext } from './state/GlobalContext';
import { useState } from 'react';
import Form from './pages/Form';

const Stack = createNativeStackNavigator();

export default function App() {
  const [placeholder, setPlaceholder ]= useState('my placeholder');
  return (
    <GlobalContext.Provider value={{placeholder, setPlaceholder}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='signup'>
          <Stack.Screen name="signup" component={Signup}/>
          <Stack.Screen name="main" component={Main}/>
          <Stack.Screen name="form" component={Form} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
