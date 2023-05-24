import React from "react";
import Option from "../components/Option";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import base from "../styles/base";

interface HomeProps {
    navigation: any
}

const Home: React.FunctionComponent<HomeProps> = (props) => {

    return (<ScrollView>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', overflow: 'scroll' }}>
            <Option title="What is Abuse" iconName="help" route={null} navigation={props.navigation}></Option>
            <Option title="Warning Sign" iconName="exclamation-thick" route={null} navigation={props.navigation}></Option>
            <Option title="Escape plan" iconName="exit-run" route={null} navigation={props.navigation}></Option>
            <Option title="Journal" iconName="calendar-month-outline" route='calendar' navigation={props.navigation}></Option>
            <Option title="Self Care" iconName="account-plus" route={null} navigation={props.navigation}></Option>
            <Option title="Testimonies" iconName="message-text-outline" route={null} navigation={props.navigation}></Option>
            <Option title="Safe message" iconName="email-lock" route={null} navigation={props.navigation}></Option>
            <Option title="SelfDefence" iconName="shield-outline" route={null} navigation={props.navigation}></Option>
            <Option title="Organizations" iconName="sitemap-outline" route={null} navigation={props.navigation}></Option>
            <Option title="Articles" iconName="newspaper-variant-outline" route={null} navigation={props.navigation}></Option>
            <Option title="General" iconName="lightbulb-outline" route={null} navigation={props.navigation}></Option>
        </View>
    </ScrollView>);
};

export default Home;