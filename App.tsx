import { Svg, SvgUri } from 'react-native-svg';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './pages/Signup';
import Main from './pages/Main';
import { GlobalContext } from './state/GlobalContext';
import { useState } from 'react';
import OnBoarding from './pages/OnBoarding';
import LogoSvg from './assets/wst logo.svg';
import { View } from 'react-native/types';

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

export default function App() {
  const [placeholder, setPlaceholder] = useState('my placeholder');

  const screenOptions: NativeStackNavigationOptions = {
    title: "WST",
    headerTitleAlign: 'center',
    headerBackVisible: false,
  };

  return (
    <GlobalContext.Provider value={{ placeholder, setPlaceholder }}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName='onBoarding' screenOptions={screenOptions}>
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="main" component={Main} />
          <Stack.Screen name="onBoarding" component={OnBoarding} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}