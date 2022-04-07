import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Exercice 1</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.miniTitle}>Mon titre</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor in turpis sagittis molestie. Phasellus sagittis leo nisl, in maximus purus elementum vel. Vestibulum sodales metus dictum erat fringilla egestas.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.miniTitle}>Mon titre</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor in turpis sagittis molestie. Phasellus sagittis leo nisl, in maximus purus elementum vel. Vestibulum sodales metus dictum erat fringilla egestas.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.miniTitle}>Mon titre</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor in turpis sagittis molestie. Phasellus sagittis leo nisl, in maximus purus elementum vel. Vestibulum sodales metus dictum erat fringilla egestas.
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
  text: {
    color: 'black',
    marginHorizontal: 40,
    marginTop: 20,

  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: 10,
    marginTop: 10,

  },
  miniTitle: {
    marginHorizontal: 20,
    marginTop: 30,
    fontSize: 20,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingLeft: 20,
  }
});
