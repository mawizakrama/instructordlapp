import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from "react-native";
import { Picker, Item, Label } from "native-base";
import config from "./config";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      cpassword: "",
      fullname: "",
      phone: "",
      type: "instructor",
      institutes: [],
      institute: "",
      isLoading: true
    };
  }

  componentWillMount() {
    this.getInstitutes();
  }

  getInstitutes = () => {
    return fetch(config.baseUrl + "/getInstitutes", {
      method: "GET"
    })
      .then(data => data.json())
      .then(dataJson => {
        this.setState({ institutes: dataJson, isLoading: false });
      })
      .catch(err => console.error(err));
  };

  register = () => {
    const {
      email,
      password,
      cpassword,
      fullname,
      phone,
      institute
    } = this.state;
    console.log(email, password, cpassword, fullname, phone, institute);
    return fetch(config.baseUrl + "/instructorRegister", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        cpassword: cpassword,
        fullname: fullname,
        phone: phone,
        institute: institute
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(resJson => {
        Alert.alert("Message", resJson.message);
      })
      .catch(err => console.error(err));
  };

  renderInstitutes = () => {
    let { institutes } = this.state;
    return institutes.map(value => (
      <Picker.Item label={value.name} key={value._key} value={value._key} />
    ));
  };

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
          onSubmitEditing={() => this.password.focus()}
          onChangeText={text => this.setState({ email: text })}
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Full name"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          onSubmitEditing={() => this.password.focus()}
          onChangeText={text => this.setState({ fullname: text })}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Your password"
          secureTextEntry
          placeholderTextColor="#ffffff"
          //ref={() => this.password = input}
          onChangeText={text => this.setState({ password: text })}
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Confirm password"
          secureTextEntry
          placeholderTextColor="#ffffff"
          //ref={() => this.password = input}
          onChangeText={text => this.setState({ cpassword: text })}
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Phone Number"
          textContentType="telephoneNumber"
          placeholderTextColor="#ffffff"
          //ref={() => this.password = input}
          onChangeText={text => this.setState({ phone: text })}
        />

        <Item>
          <Text style={{ color: "#FFF" }}>Pick Institute</Text>
          <Picker
            note
            mode="dropdown"
            style={{ width: 200, color: "#fff" }}
            selectedValue={this.state.institute}
            onValueChange={selectedValue =>
              this.setState({ institute: selectedValue })
            }
          >
            {this.renderInstitutes()}
          </Picker>
        </Item>

        <TouchableOpacity style={styles.button} onPress={this.register}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignupForm;

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
  }
});
