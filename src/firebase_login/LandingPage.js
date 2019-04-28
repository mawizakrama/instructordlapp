import React from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';
import TextInputField from './src/component/TextInputField';
import styles from './component/styles';
import SignUpForm from './SignUpForm';
import MainScreen from './MainScreen';

class LogInForm extends React.Component {
	state = { email: '', password: '', error: '', loading: false };

	onSignInPress() {
		const { navigate } = this.props.navigation;
		this.setState({ error: '', loading: true });

		const { email, password } = this.state;
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(() => {
			this.setState({ error: 'Logged In', loading: false
		});
		})
		.then(() => {
			navigate('LogInSuccess');
		})
		.catch(() => {
			this.setState({ error: 'Invalid email or Password', loading: false });
		});
	}	

	renderButtonOrLoading() {
		if (this.state.loading) {
			return <View><ActivityIndicator /></View>;
		}
		return (
		<Button
		onPress={this.onSignInPress.bind(this)}
		title="Log In"
		/>
		);
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
		<View>
		<Text style={styles.mainText}>Get started by signing in</Text>

		<TextInputField 
			label=''
                        placeholder='james@gmail.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        autoCorrect={false}
		/>
                    <TextInputField
                        label=''
                        autoCorrect={false}
                        placeholder='Your Password...'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    {this.renderButtonOrLoading()}

                    <Text style={styles.orStyle}>or</Text>

		<Text
		onPress={() => navigate('Social')}
		style={styles.textStyle}
		>
		Log in with a Social Network
		</Text>

		<Text
		onPress={() => navigate('SignUp')}
		style={styles.signupText}
		>
		Don't have an account? Sign up
		</Text>


		</View>
		);
	}
}

class SuccessfullLogin extends React.Component {
	render() {
		return (
		<View>
		<MainScreen />
		</View>
		);
	}
}

class SigningUp extends React.Component {
	static navigationOptions = {
    header: 'screen'
    };

  render() {
    return (
    <View>
      <Text style={styles.mainText}>Create an account</Text>
      <SignUpForm />
    </View>
    );
  }
}

class SocialNetworks extends React.Component {
	static navigationOptions = {
    header: 'screen'
    };
  render() {
    return (
      <View>
      <Text>
      Choose an account
      Facebook 
      Gmail
      </Text>
      </View>
      );
  }
}

const LogInNavigation = createStackNavigator({
	LoggingIn: { screen: LogInForm },
	LogInSuccess: { screen: SuccessfullLogin }
	},
	{
		headerMode: 'none',
		initialRouteName: 'LoggingIn'
	}
);

const LandingPageNavigation = createStackNavigator({
	LogInNav: { screen: LogInNavigation },
	SignUp: { screen: SigningUp },
	Social: { screen: SocialNetworks } 
	},
	{
		headerMode: 'none'
	}
);

const AppContainer = createAppContainer(LandingPageNavigation);

class LandingPage extends React.Component {
	render() {
		return <AppContainer />;
	}
}
//<Text style={styles.orStyle}>Forgot your login details? Get help signing in.</Text>

export default LandingPage;