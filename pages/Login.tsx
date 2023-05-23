import React from 'react';
import {View} from 'react-native';
import {Title} from 'react-native-paper';
import base from '../styles/base';

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = (props) => {
  return (
    <View style={base.centered}>
      <Title>Login</Title>
    </View>
  );
};
export default Login;