import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// or alternatively
import API from "call-of-duty-api";


import { ModernWarfare, platforms } from "call-of-duty-api";




export default function App() {
API.login(ssoToken: string);
  try {
    let data = await ModernWarfare.fullData(gamertag: string, platform: platforms)
 } catch(Error) {
     //Handle Exception
 }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
