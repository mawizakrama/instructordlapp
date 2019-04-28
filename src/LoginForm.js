import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  AsyncStorage
} from "react-native";
import { Actions } from "react-native-router-flux";
import firebase from "firebase";
import config from "./config";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: "" };

  /*mainpage() {
		Actions.mainpage();
	}*/

  onSignInPress() {
    this.setState({ error: "", loading: true });

    const { email, password } = this.state;
    return fetch(config.baseUrl + "/instructorLogin", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(dataJson => {
        Alert.alert("Message", dataJson.message);
        console.log(dataJson);
        if (dataJson.user !== undefined) {
          AsyncStorage.setItem("@Instructor:uid", dataJson.user).then(() =>
            Actions.mapscreenpage()
          );
        }
      })
      .catch(err => console.error(err));
  }

  /*renderButtonOrLoading() {
		if (this.state.loading) {
			return <View><ActivityIndicator /></View>;
		}
		return (
		<TouchableOpacity style={styles.button} onPress={this.onSignInPress.bind(this)}>
              <Text style={styles.buttonText}>{this.props.type}</Text>
              </TouchableOpacity>
              );
	}*/

  render() {
    return (
      <View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="james@gmail.com"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
          autoCorrect={false}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Your password"
          secureTextEntry
          placeholderTextColor="#ffffff"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onSignInPress.bind(this)}
        >
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  inputBox: {
    width: 300,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  },

  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 16,
    marginVertical: 10,
    paddingVertical: 13
  },

  buttonText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  },

  errorTextStyle: {
    color: "#E64A19",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10
  }
});
