import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert } from 'react-native';
import Product from './Product';

export default function Products() {
	return (
	    <ScrollView>
            <Product title='Caca Cola' desc={'Il y a 5 mins'}></Product>
            <Product title='Pessi' desc={'Hier'}></Product>
            <Product title='OTocar' desc={'Il y a 2 jours'}></Product>
        </ScrollView>
	)
}

const styles = StyleSheet.create({

})