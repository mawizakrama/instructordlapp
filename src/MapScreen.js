import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  AsyncStorage,
  ActivityIndicator,
  Modal
} from "react-native";
import MapView, { Marker, MarkerAnimated } from "react-native-maps";
import firebase from "firebase";
import MapViewDirections from "react-native-maps-directions";
import { Actions } from "react-native-router-flux";
import config from "./config";
import io from "socket.io-client";
const GOOGLE_MAPS_APIKEY = "AIzaSyB-7IXbfGG3r7vgxlDn1jHf4FUMKHgo8ms";

const origin = {
  latitude: 0,
  longitude: 0
};

const destination = {
  latitude: 0,
  longitude: 0
};

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 24.9287285,
      longitude: 67.1125752,
      error: null,
      alatitude: 0,
      alongitude: 0,
      arrayMarkers: [],
      isLoading: true,
      reachedLocation: false,
      lat: "",
      lng: "",
      uid: ""
    };
    this.socket = io.connect(config.baseUrl);
  }

  // requestLearner = () => {
  //   const that = this;
  //   firebase
  //     .database()
  //     .ref("Learner/")
  //     .on("value", data => {
  //       data.forEach(function(Snapshot) {
  //         var key = Snapshot.key;
  //         var childData = Snapshot.val();
  //         console.log(childData);
  //         const { arrayMarkers } = that.state;
  //         if (arrayMarkers !== undefined) {
  //           arrayMarkers.push({
  //             latitude: childData.latitude,
  //             longitude: childData.longitude
  //           });
  //           that.setState({
  //             arrayMarkers: arrayMarkers,
  //             learnerFound: true,
  //             reachedLocation: false
  //           });
  //         } else {
  //           console.log("array value is undefined");
  //         }
  //       });
  //     });
  // };

  componentDidMount() {
    this.getUserId();
    this.socket.on("newLearner", data => {
      Alert.alert(
        "New Ride",
        "Name: " +
          data.user.full_name +
          "\nLocation: " +
          data.user.latitude +
          ", " +
          data.user.longitude,
        [
          {
            text: "Accept",
            onPress: () => {
              const dataToSendThroughSocket = {
                historyID: data.history.key,
                sourceLat: this.state.lat,
                sourceLng: this.state.lng,
                instructorID: this.state.uid,
                status: "On Progress"
              };
              console.log(data);
              this.socket.emit("acceptRide", dataToSendThroughSocket);
            }
          },
          {
            text: "Cancel"
          }
        ]
      );
    });
  }

  updateMyLocation = () => {
    const { uid, lat, lng } = this.state;
    return fetch(config.baseUrl + config.updateInstructorLocation, {
      method: "POST",
      body: JSON.stringify({
        iid: uid,
        lat: lat,
        lng: lng
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {})
      .catch(err => console.error(err));
    this.setState({ isLoading: false });
  };

  getUserId = () => {
    AsyncStorage.getItem("@Instructor:uid")
      .then(uid => {
        this.setState({ uid });
        this.getLocation();
      })
      .catch(err => console.error(err));
  };

  getLocation = () => {
    navigator.geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          isLoading: false
        });
        this.updateMyLocation();
      },
      error => console.error(error),
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 30000 }
    );
  };

  stop = () => {
    Actions.lessonstatus();
  };

  start = () => {
    this.setState({ reachedLocation: true });
  };

  loadMarkers = () => {
    const { arrayMarkers } = this.state;
    return arrayMarkers.map(markerObj => (
      <React.Fragment key={JSON.stringify(markerObj)}>
        <MapView.Marker
          coordinate={{
            latitude: markerObj.latitude,
            longitude: markerObj.longitude
          }}
        />
        <MapViewDirections
          origin={{
            latitude: this.state.latitude,
            longitude: this.state.longitude
          }}
          destination={{
            latitude: markerObj.latitude,
            longitude: markerObj.longitude
          }}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="red"
        />
      </React.Fragment>
    ));
  };

  render() {
    const { arrayMarkers } = this.state;
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }
    let showButton = null;
    if (this.state.learnerFound === true) {
      showButton = (
        <TouchableOpacity
          onPress={() => this.start()}
          style={styles.bottomButton}
        >
          <View>
            <Text style={styles.bottomButtonText}>Start</Text>
          </View>
        </TouchableOpacity>
      );
    }
    if (this.state.reachedLocation === true) {
      showButton = (
        <TouchableOpacity
          onPress={() => this.stop()}
          style={styles.bottomButton}
        >
          <View>
            <Text style={styles.bottomButtonText}>Reached Location</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
          showsUserLocation={true}
        >
          {this.loadMarkers()}
        </MapView>
        {showButton}
      </View>
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
  },
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default MapScreen;
