import React from 'react';
import {View} from 'react-native';
import {Title} from 'react-native-paper';
import base from '../styles/base';

interface MainProps {}

const Main: React.FunctionComponent<MainProps> = (props) => {
  return (
    <View style={base.centered}>
      <Title>Main</Title>
    </View>
  );
};
export default Main;