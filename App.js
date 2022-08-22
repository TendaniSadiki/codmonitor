import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './src/components/Home/Home';
import { StatusBar } from 'expo-status-bar';


export default class App extends Component {

  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar/>
        <Home/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F3',
  },
  
});


