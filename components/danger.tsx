import { Card, Text } from "react-native-paper"
import { View, Image, StyleSheet } from "react-native"

export const Danger = (props: any) => {
    return <View style={style.view}>
        <Text variant="headlineMedium">If someone is in immediate danger call the police</Text>
        <View style={style.card}>
            <Image source={require('../assets/118.png')} />
            <Text>Call hot-line 118</Text>
        </View>
        <View style={style.card}>
            <Image style={{marginBottom: 10}} source={require('../assets/orgs.png')} />
            <Text variant="bodySmall">contact organizations</Text>
        </View>
    </View>
}

const style = StyleSheet.create({
    card: {
        margin: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#E9CAE7',
        alignItems: 'center',
        width: '50%',
    },
    view: {
        alignItems: 'center'
    }
})