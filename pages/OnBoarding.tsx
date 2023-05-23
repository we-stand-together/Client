import { View } from 'react-native';
import React from "react";
import { Button, Title, Text } from 'react-native-paper';
import base from '../styles/base';

interface OnBoardingProps {
    navigation: any
}

const OnBoarding: React.FunctionComponent<OnBoardingProps> = (props) => {

    const handleNextPage = () => {
        props.navigation.navigate('signup');
    }

    return (
        <View style={base.centered}>
            <Title>Welcome</Title>
            <Text>We Stand Together is an app for family members, freinds, colleagues, and people that want to help victims of domestic abuse and to help those suffering from domestic abuse themselves</Text>
            <Button onPress={handleNextPage}>Next</Button>
        </View>
    );
};
export default OnBoarding;