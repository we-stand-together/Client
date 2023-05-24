import React from "react";
import { TouchableOpacity, View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { StyleSheet } from 'react-native';
import base from "../styles/base";

interface OptionProps {
    title: string,
    iconName: any
    route: any
}

const Option: React.FunctionComponent<OptionProps> = (props) => {
    return (<View style={base.option}>
        <IconButton 
        mode='contained'
        onPress={() => console.log("Pressed")} 
        icon={props.iconName}
        size={50}
        />
        <Text variant="bodyLarge">{props.title}</Text>
    </View>);
};

export default Option;