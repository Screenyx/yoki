import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert } from 'react-native';

export default function Header() {
    return (
        <View style={styles.title}>
            <Text style={styles.yokiTitle}>YOKI</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        alignContent: 'center',
    },
    yokiTitle: {
        display: 'flex',
        backgroundColor: 'grey',
        fontSize: 40,
        color: 'black',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
    },
})