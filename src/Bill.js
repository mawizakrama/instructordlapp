import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Container, Content, Grid, Row, Col, H2 } from "native-base";
import { Actions } from "react-native-router-flux";
class Bill extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Container style={{ padding: 10, marginTop: 30 }}>
          <H2 style={{ textAlign: "center" }}>Your Lesson is Complete!</H2>
          <Grid>
            <Row>
              <Col size={6}>
                <Text style={{ fontWeight: "bold" }}>Total</Text>
              </Col>
              <Col size={6}>
                <Text>PKR 250.00</Text>
              </Col>
            </Row>
          </Grid>
        </Container>

        <TouchableOpacity
          onPress={() => Actions.mapscreenpage()}
          style={styles.bottomButton}
        >
          <Text style={styles.bottomButtonText}>PAID</Text>
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

export default Bill;
