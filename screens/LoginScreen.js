import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Google from "expo-google-app-auth"
import firebase from "firebase"
export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
