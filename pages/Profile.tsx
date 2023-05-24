import React, { useContext } from 'react';
import {View} from 'react-native';
import {TextInput, Title} from 'react-native-paper';
import { GlobalContext } from '../state/GlobalContext';
import base from '../styles/base';

interface ProfileProps {}

export interface FormResult {
    abuseType: string,
    score: number
}

const Profile: React.FunctionComponent<ProfileProps> = (props) => {
    const context = useContext(GlobalContext);
  return (
    <View style={base.centered}>
      <Title>Profile, {context.placeholder}</Title>
    </View>
  );
};
export default Profile;