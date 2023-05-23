import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Text, TextInput, Title} from 'react-native-paper';
import { SignIn } from '../lib/auth';
import { GlobalContext } from '../state/GlobalContext';
import base from '../styles/base';

interface SignUp {
    navigation: any
}

const Signup: React.FunctionComponent<SignUp> = (props) => {
    const context = useContext(GlobalContext);
    const [phoneNumber, setPhoneNumber] = useState<number | undefined>(undefined)
    const [passcode, setPasscode] = useState<number | undefined>(undefined)

    const handleRegister = () => {
        console.log('register pressed');
        // TODO: handle signup
    }
    const handleSignIn = async () => {
      console.log('sign in pressed', phoneNumber, passcode);
      if (!phoneNumber || !passcode) return;
      const success = await SignIn(phoneNumber, passcode);
      console.log('sign in successfull:', success);
      console.log('token from storage:', await AsyncStorage.getItem('AUTH_TOKEN'));
      props.navigation.navigate('form')
    }

  return (
    <ScrollView contentContainerStyle={base.centeredScroll} keyboardShouldPersistTaps='handled'>
      <Title>Create Secuirty Code</Title>
      <Text variant='bodyMedium'>
        We want to create a safe space for you, please enter a phone number and a passcode. If you already have a user, click Sign In.
      </Text>
      <TextInput inputMode='numeric' onChangeText={(t) => setPhoneNumber(parseInt(t))} style={{width: '80%', marginTop: 20}} label='Phone Number'/>
      <TextInput inputMode='numeric' onChangeText={(t) => setPasscode(parseInt(t))} style={{width: '80%', marginTop: 20}} label='Passcode' />
      <View style={base.row}>
        <Button onPress={handleRegister} style={{margin: 10}} mode='contained-tonal'>Sign Up</Button>
        <Button onPress={handleSignIn} style={{margin: 10}} mode='contained'>Sign In</Button>
      </View>
    </ScrollView>
  );
};
export default Signup;