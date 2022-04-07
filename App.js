import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.yokiTitle}>YOKI</Text>
      </View>
      <View style={styles.containerButton}>
        <Pressable style={styles.buttonScan} onPress={() => Alert.alert('Scan effectué')} >
          <Text style={styles.textScan}>Scanner</Text>
        </Pressable>  
      </View>
      <ScrollView>
        <View style={styles.productContainer}>
          <Text style={styles.textTitleProduct}>Canette Coca</Text>
          <Text style={styles.textDescriptionProduct}>Scan Hier</Text>
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.textTitleProduct}>Canette Coca</Text>
          <Text style={styles.textDescriptionProduct}>Scan Hier</Text>
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.textTitleProduct}>Canette Coca</Text>
          <Text style={styles.textDescriptionProduct}>Scan Hier</Text>
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.textTitleProduct}>Canette Coca</Text>
          <Text style={styles.textDescriptionProduct}>Scan Hier</Text>
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.textTitleProduct}>Canette Coca</Text>
          <Text style={styles.textDescriptionProduct}>Scan Hier</Text>
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.textTitleProduct}>Canette Coca</Text>
          <Text style={styles.textDescriptionProduct}>Scan Hier</Text>
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.textTitleProduct}>Canette Coca</Text>
          <Text style={styles.textDescriptionProduct}>Scan Hier</Text>
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.textTitleProduct}>Canette Coca</Text>
          <Text style={styles.textDescriptionProduct}>Scan Hier</Text>
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.textTitleProduct}>Canette Coca</Text>
          <Text style={styles.textDescriptionProduct}>Scan Hier</Text>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
  buttonScan: {
    backgroundColor: 'grey',
    paddingHorizontal: 100,
    paddingVertical: 50,
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  textScan: {
    fontSize: 30,
  },
  containerButton: {
    borderBottomColor: 'black',
    borderWidth: 1,
  },
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

});
