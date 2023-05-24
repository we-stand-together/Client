import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
import { GlobalContext } from '../state/GlobalContext';
import base from '../styles/base';

interface MainProps {
  navigation: any
}

const Main: React.FunctionComponent<MainProps> = (props) => {
  const context = useContext(GlobalContext);
  return (
    <View style={base.centered}>
      <Title>Main, {context.placeholder}</Title>
      <TextInput label={'placeholder'} onChangeText={text => context.setPlaceholder(text)} />
      <Button onPress={() => {
        props.navigation.navigate('navbar');
      }}>Next</Button>
    </View>
  );
};
export default Main;