import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { Actions } from "react-native-router-flux";

class LessonStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Card
          style={{
            paddingRight: 2,
            paddingLeft: 2,
            paddingTop: 2,
            paddingBottom: 2,
            backgroundColor: "white"
          }}
        >
          <CardItem header bordered style={{ backgroundColor: "#455a64" }}>
            <Text style={{ fontSize: 18, fontWeight: "200", color: "white" }}>
              Lesson 2: Moving Off and Stopping
            </Text>
          </CardItem>

          <CardItem>
            <Body>
              <Text style={{ fontSize: 16 }}>
                How to take off a car will be taught in this lesson thoroughly
                and what will be the amount of acceleration and clutch paddle
                will be required to initiate the movement without turning off
                engine.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <TouchableOpacity
          onPress={() => Actions.bill()}
          style={styles.bottomButton}
        >
          <Text style={styles.bottomButtonText}>End Lesson</Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  bottomButton: {
    backgroundColor: "#1c313a",
    marginTop: "auto",
    margin: 20,
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    alignSelf: "center"
  },
  bottomButtonText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "600"
  }
});

export default LessonStatus;
