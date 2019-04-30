import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Button,
  Title,
  Icon,
  Card,
  CardItem,
  Content
} from "native-base";
import { Actions } from "react-native-router-flux";
import config from "../config";

class StatusScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  mapscreenpage() {
    Actions.mapscreenpage();
  }

  logout = () => {
    AsyncStorage.removeItem("@Instructor:uid")
      .then(() => {
        Actions.login();
      })
      .catch(err => Alert.alert("Error", err));
  };

  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
    )
  };
  render() {
    if (this.state.isLoading === true) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <Header style={{ backgroundColor: "#85B8BA" }}>
          <Left>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" style={{ color: "#1c313a" }} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{ color: "#1c313a" }}>Start a Trip</Title>
          </Body>
          <Right>
            <Icon name="more" style={{ color: "#85B8BA" }} />
          </Right>
        </Header>
        <CardItem button onPress={this.mapscreenpage}>
          <Body>
            <Text
              style={{
                fontSize: 22,
                paddingTop: 30,
                paddingRight: 30,
                paddingLeft: 30,
                paddingBottom: 20
              }}
            >
              You're offline.
            </Text>

            <Text
              style={{
                fontSize: 22,
                paddingTop: 5,
                paddingRight: 30,
                paddingLeft: 30,
                paddingBottom: 20
              }}
            >
              Go online to start a trip.
            </Text>
          </Body>
        </CardItem>
        <TouchableOpacity onPress={this.logout} style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    backgroundColor: "#1c313a",
    borderRadius: 16,
    marginVertical: 10,
    paddingVertical: 10,
    position: "absolute",
    bottom: 10
  },

  buttonText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
export default StatusScreen;
