import React from "react";
import Option from "../components/Option";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import base from "../styles/base";

const Home: React.FunctionComponent = (props) => {
    return (<ScrollView>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', overflow: 'scroll' }}>
            <Option title="What is Abuse" iconName="help" route='null' ></Option>
            <Option title="Warning Sign" iconName="exclamation-thick" route='null' ></Option>
            <Option title="Escape plan" iconName="exit-run" route='null' ></Option>
            <Option title="Journal" iconName="calendar-month-outline" route='null' ></Option>
            <Option title="Self Care" iconName="account-plus" route='null' ></Option>
            <Option title="Testimonies" iconName="message-text-outline" route='null' ></Option>
            <Option title="Safe message" iconName="email-lock" route='null' ></Option>
            <Option title="SelfDefence" iconName="shield-outline" route='null' ></Option>
            <Option title="Organizations" iconName="transit-connection-variant" route='null' ></Option>
            <Option title="Articles" iconName="newspaper-variant-outline" route='null' ></Option>
            <Option title="General" iconName="lightbulb-outline" route='null' ></Option>
        </View>
    </ScrollView>);
};

export default Home;