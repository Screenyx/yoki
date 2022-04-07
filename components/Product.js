import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert } from 'react-native';


export default function Product({title, desc}) {
	return (
    <View style={styles.productContainer}>
        <Text style={styles.textTitleProduct}>{title}</Text>
        <Text style={styles.textDescriptionProduct}>{desc}</Text>
    </View>
	)
}

const styles = StyleSheet.create({
    textTitleProduct: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
      },
      textDescriptionProduct: {
        fontSize: 15,
        color: 'black',
      },
      productContainer: {
        marginHorizontal: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 20,
        paddingTop: 20,
      }
})