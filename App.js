import React, { Component } from "react";
import { AppRegistry, View, StatusBar, StyleSheet } from "react-native";
import * as firebase from "firebase";
import Routes from "./src/Routes";
import config from "./src/config";

export default class App extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBSotxoQCHFHN-S0D62INrmqm-xqhWwKMc",
      authDomain: "dlapp-2208.firebaseapp.com",
      databaseURL: "https://dlapp-2208.firebaseio.com",
      projectId: "dlapp-2208",
      storageBucket: "dlapp-2208.appspot.com",
      messagingSenderId: "1085165063272"
    });
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
});
