import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './src/components/Home/Home';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
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


