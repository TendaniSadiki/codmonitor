import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import Constants from 'expo-constants';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Login to COD"
          onPress={this._handleOpenWithLinking}
          style={styles.button}
        />

      </View>
    );
  }
  _handleOpenWithLinking = () => {
    Linking.openURL('https://profile.callofduty.com/cod/login');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button: {
    marginVertical: 10,
  },
});


