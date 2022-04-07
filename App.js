import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert } from 'react-native';
import Header from './components/Header';
import ScannerButton from './components/ScannerButton';
import Products from './components/Products'
export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <ScannerButton></ScannerButton>
      <Products></Products>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
