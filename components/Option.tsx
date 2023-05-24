import React from "react";
import { TouchableOpacity, View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { StyleSheet } from 'react-native';
import base from "../styles/base";

interface OptionProps {
    title: string | null,
    iconName: any
    route: any
    navigation: any
}

const Option: React.FunctionComponent<OptionProps> = (props) => {

    const handleNextPage = () => {
        if(props.route)
            props.navigation.navigate(props.route);
        else
            console.log(`route ${props.route} doesnt exist!`)

    }

    return (<View style={base.option}>
        <IconButton
            mode='contained'
            onPress={handleNextPage}
            icon={props.iconName}
            size={50}
        />
        <Text variant="bodyLarge">{props.title}</Text>
    </View>);
};

export default Option;