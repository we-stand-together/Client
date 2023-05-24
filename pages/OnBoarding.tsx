import { View } from 'react-native';
import React, {useEffect, useState} from "react";
import { Button, Title, Text } from 'react-native-paper';
import base from '../styles/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IsLoggedIn } from '../lib/auth';

interface OnBoardingProps {
    navigation: any
}

const OnBoarding: React.FunctionComponent<OnBoardingProps> = (props) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        AsyncStorage.clear();
        checkLogin();
    }, []);

    const checkLogin =() => IsLoggedIn().then(loggedIn => {
        if (loggedIn) {
            console.log('already signed in. token:', loggedIn);
            props.navigation.navigate('form');
            return;
        }

        setLoading(false);
    });

    const handleNextPage = () => {
        props.navigation.navigate('signup');
    }

    return (
        <View style={base.centered}>
            {!loading && 
            <>
                <Title>Welcome</Title>
                <Text variant='bodyMedium'>We Stand Together is an app for family members, freinds, colleagues, and people that want to help victims of domestic abuse and to help those suffering from domestic abuse themselves</Text>
                <Button onPress={handleNextPage}>Next</Button>
            </>
            }
            {loading && 
            <>
                <Title>Loading...</Title>
                <Button onPress={() => checkLogin()}>refresh</Button>
            </>
            }
        </View>
    );
};
export default OnBoarding;