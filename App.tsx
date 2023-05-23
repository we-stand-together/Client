import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './pages/Signup';
import Main from './pages/Main';
import { GlobalContext } from './state/GlobalContext';
import { useState } from 'react';
import Form from './pages/Form';
import OnBoarding from './pages/OnBoarding';

const Stack = createNativeStackNavigator();

const MyTheme: Theme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#f5eff8',
    card: '#e9cae7',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6b2272',
    accent: '#e9cae7',
  }
};

export default function App() {
  const [placeholder, setPlaceholder] = useState('my placeholder');

  const screenOptions: NativeStackNavigationOptions = {
    title: "WST",
    headerTitleAlign: 'center',
    headerBackVisible: false,
  };

  return (
    <PaperProvider theme={theme}>
    <GlobalContext.Provider value={{placeholder, setPlaceholder}}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName='onBoarding'>
          <Stack.Screen name="signup" component={Signup}/>
          <Stack.Screen name="main" component={Main}/>
          <Stack.Screen name="form" component={Form} />
          <Stack.Screen name="onBoarding" component={OnBoarding}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
    </PaperProvider>
  );
}