import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Stack
} from "react-native-router-flux";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import MainScreen from "./MainScreen";
import MapScreen from "./MapScreen";
import LessonStatus from "./LessonStatus";
import Bill from "./Bill";

//hideBackImage drawerImage={'Hamburger'}

class RouterComponent extends Component {
  constructor() {
    super();
    this.state = {
      loggedin: false
    };
  }

  componentWillMount() {
    AsyncStorage.getItem("@Instructor:uid").then(
      uid => {
        if (uid !== undefined && uid !== null) {
          this.setState({ loggedin: true });
        }
      },
      err => console.error(err)
    );
  }

  render() {
    if (this.state.loggedin == false) {
      return (
        <Router
          navigationBarStyle={{ backgroundColor: "#455a64" }}
          sceneStyle={{ backgroundColor: "white" }}
        >
          <Scene key="root">
            <Scene
              key="login"
              component={LoginPage}
              title=""
              hideNavBar
              initial
            />
            <Scene
              key="signup"
              component={SignupPage}
              title=" Signup Here"
              hideNavBar
            />
            <Scene
              key="mainpage"
              component={MainScreen}
              title=""
              hideNavBar
              type={ActionConst.RESET}
            />
            <Scene
              key="mapscreenpage"
              component={MapScreen}
              title=""
              hideNavBar
            />
            <Scene
              key="lessonstatus"
              component={LessonStatus}
              title=""
              hideNavBar
            />
            <Scene key="bill" component={Bill} title="" hideNavBar />
          </Scene>
        </Router>
      );
    } else {
      return (
        <Router
          navigationBarStyle={{ backgroundColor: "#455a64" }}
          sceneStyle={{ backgroundColor: "white" }}
        >
          <Scene key="root">
            <Scene key="login" component={LoginPage} title="" hideNavBar />
            <Scene
              key="signup"
              component={SignupPage}
              title=" Signup Here"
              hideNavBar
            />
            <Scene
              key="mainpage"
              component={MainScreen}
              title=""
              hideNavBar
              initial
              type={ActionConst.RESET}
            />
            <Scene
              key="mapscreenpage"
              component={MapScreen}
              title=""
              hideNavBar
            />
            <Scene
              key="lessonstatus"
              component={LessonStatus}
              title=""
              hideNavBar
            />
            <Scene key="bill" component={Bill} title="" hideNavBar />
          </Scene>
        </Router>
      );
    }
  }
}

/*//
		//<Scene key="socialnetwork" component={SocialNetworks} title="" />
		*/

export default RouterComponent;
