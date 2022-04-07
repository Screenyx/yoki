import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert } from 'react-native';
import Product from './Product';

export default function Products() {
	return (
	    <ScrollView>
            <Product title='Cola' desc={'Il y a 5 mins'}></Product>
            <Product title='Pepsi' desc={'Hier'}></Product>
            <Product title='Oasis' desc={'Il y a 2 jours'}></Product>
        </ScrollView>
	)
}

const styles = StyleSheet.create({

})