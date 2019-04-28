import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import AppnameText from "./AppnameText";
import SignupFormm from "./SignupFormm";

class SignupPage extends Component {
  signup() {
    Actions.login();
  }

  render() {
    return (
      <View style={styles.signupContainer}>
        <AppnameText />
        <SignupFormm type="Sign up" />
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.loginButton}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignupPage;

const styles = StyleSheet.create({
  signupContainer: {
    backgroundColor: "#85B8BA",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loginTextContainer: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  loginText: {
    color: "#ffffff",
    //color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 17
  },
  loginButton: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "500"
  }
});
