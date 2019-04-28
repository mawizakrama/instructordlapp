import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//color: 'rgba(255, 255, 255, 0.7)'
//color: '#DDE847'

class AppnameText extends Component {
	render() {
		return (
			<View style={styles.appnameContainer}>
			<Text style={styles.taglineText}>L E A R N. P R A C T I C E. D R I V E.</Text>
			<Text style={styles.appnameText}>Make extra money on your own time</Text>
			</View>
			);
	}
}


export default AppnameText;

const styles = StyleSheet.create({
	appnameContainer: {
		flexGrow: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	appnameText: {
		marginVertical: 15,
		fontSize: 32,
		fontWeight: '100',
		color: 'white',
		paddingLeft: 60,
		paddingRight: 50,
		paddingBottom: 30

	},
	taglineText: {
		marginVertical: 15,
		fontSize: 20,
		fontWeight: '400',
		color: '#1c313a'
		//color: 'rgba(255, 255, 255, 0.7)'

	}
});
