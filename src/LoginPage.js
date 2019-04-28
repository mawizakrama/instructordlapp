import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import AppnameText from "./AppnameText";
import LoginForm from "./LoginForm";

class LoginPage extends Component {
  signup() {
    Actions.signup();
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <AppnameText />
        <LoginForm type="Log In" />
        <View style={styles.snContainer}>
          <TouchableOpacity onPress={this.socialnetwork}>
            <Text style={styles.snText}>Connect with a social network</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>Dont have an account yet?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginPage;

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#85B8BA",
    //'#455a64',

    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  signupTextContainer: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    //color: 'rgba(255, 255, 255, 0.6)',
    color: "#ffffff",
    fontSize: 17
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "500"
  },
  snContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  snText: {
    //marginVertical: 15,
    fontSize: 17,
    fontWeight: "200",
    color: "#ffffff"
    //color: 'rgba(255, 255, 255, 0.6)'
  }
});
