import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert } from 'react-native';

function onScanPress(){
  alert("Press");
}

export default function ScannerButton() {
	return (
		<View style={styles.containerButton}>
				<Pressable style={styles.buttonScan} onPress={onScanPress} >
					<Text style={styles.textScan}>Scanner</Text>
				</Pressable>  
		</View>
	)
}

const styles = StyleSheet.create({
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
})