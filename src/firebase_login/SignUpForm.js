import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import firebase from 'firebase';
import TextInputField from './component/TextInputField';
import styles from './component/styles';

class SignUpForm extends Component {
	state = { email: '', password: '', error: '', loading: false };

	onSignUpPress() {
		this.setState({ error: '', loading: true });

		const { email, password } = this.state;
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(() => { 
			this.setState({ error: 'Account Created', loading: false 
	}); 
	})
			.catch(() => {
				this.setState({ error: 'Authentication', loading: false });
			});
	}

	renderButtonOrLoading() {
		if (this.state.loading) {
			return <View><ActivityIndicator /></View>;
		}
		return (
		<Button 
		onPress={this.onSignUpPress.bind(this)}title="Sign Up" 
		/>
		);
	}

	render() {
		return (
			<View>
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
                        placeholder='New Password...'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />

                    <TextInputField
                        label=''
                        autoCorrect={false}
                        placeholder='Confirm Password'
                        secureTextEntry
                        value={this.state.password2}
                        onChangeText={password2 => this.setState({ password2 })}

                    />

                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    {this.renderButtonOrLoading()}
			</View>
			);
	}
} 

export default SignUpForm;
