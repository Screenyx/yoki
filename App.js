import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView, Pressable } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/500.png')}
        />
      </View>
      <View style={styles.container} >
        <Text style={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      </View>
      <View>
      <Text style={styles.description}>By Hugo</Text>
      </View>
      <View>
        <Pressable style={styles.button}>
          <Text>Like</Text>
        </Pressable>
      </View>
      <View>
      <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </View>
      <View>
      <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </View>
      <View>
      <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
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
  image: {
    height: 300,
    width: 450,
  },
  title: {
    color: 'black',
    fontSize: 20,
    marginTop: 20,
    marginHorizontal: 30,
  },
  description: {
    color: 'grey',
    marginTop: 20,
    fontSize: 15,
    marginHorizontal: 30,
  },
  button: {
    marginLeft: 40,
    marginRight: 310,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
  }

});
