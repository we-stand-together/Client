import React, { useContext } from 'react';
import {View} from 'react-native';
import {TextInput, Title} from 'react-native-paper';
import { GlobalContext } from '../state/GlobalContext';
import base from '../styles/base';

interface MainProps {}

const Main: React.FunctionComponent<MainProps> = (props) => {
    const context = useContext(GlobalContext);
  return (
    <View style={base.centered}>
      <Title>Main, {context.placeholder}</Title>
      <TextInput label={'placeholder'} onChangeText={text => context.setPlaceholder(text)}/>
    </View>
  );
};
export default Main;