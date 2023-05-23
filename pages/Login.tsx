import React from 'react';
import {View} from 'react-native';
import {Button, Title} from 'react-native-paper';
import base from '../styles/base';

interface LoginProps {
    navigation: any
}

const Login: React.FunctionComponent<LoginProps> = (props) => {
  return (
    <View style={base.centered}>
      <Title>Login</Title>
      <Button onPress={() => {
        props.navigation.navigate('main');
      }}>Go To Main</Button>
    </View>
  );
};
export default Login;