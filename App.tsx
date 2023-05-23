import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Main from './pages/Main';
import { GlobalContext, GlobalContextDTO } from './state/GlobalContext';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [placeholder, setPlaceholder ]= useState('my placeholder');
  return (
    <GlobalContext.Provider value={{placeholder, setPlaceholder}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="main" component={Main}/>
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
