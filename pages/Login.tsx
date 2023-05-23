import React, { useContext } from 'react';
import {View} from 'react-native';
import {Button, Title} from 'react-native-paper';
import { GlobalContext } from '../state/GlobalContext';
import base from '../styles/base';

interface LoginProps {
    navigation: any
}

const Login: React.FunctionComponent<LoginProps> = (props) => {
    const context = useContext(GlobalContext);
  return (
    <View style={base.centered}>
      <Title>Login, {context.placeholder}</Title>
      <Button onPress={() => {
        props.navigation.navigate('main');
      }}>Go To Main</Button>
    </View>
  );
};
export default Login;