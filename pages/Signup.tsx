import React, { useContext } from 'react';
import {ScrollView} from 'react-native';
import {Button, Text, TextInput, Title} from 'react-native-paper';
import { GlobalContext } from '../state/GlobalContext';
import base from '../styles/base';

interface SignUp {
    navigation: any
}

const Signup: React.FunctionComponent<SignUp> = (props) => {
    const context = useContext(GlobalContext);
    const handleRegister = () => {
        console.log('register pressed');
        // TODO: handle signup
    }
  return (
    <ScrollView contentContainerStyle={base.centeredScroll} keyboardShouldPersistTaps='handled'>
      <Title>Create Secuirty Code</Title>
      <Text variant='bodyMedium'>
        We want to create a safe space for you, please enter a phone number and a passcode
      </Text>
      <TextInput inputMode='numeric' style={{width: '80%', marginTop: 20}} label='Phone Number'/>
      <TextInput inputMode='numeric' style={{width: '80%', marginTop: 20}} label='Passcode' />
      <Button onPress={handleRegister} style={{margin: 10}} mode='elevated'>Sign Up</Button>
    </ScrollView>
  );
};
export default Signup;