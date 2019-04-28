import React from 'react';
import { View, Text, TextInput } from 'react-native';
//import { Container, Content, Form, Item, Input, Label } from 'native-base';

import styles from './styles.js';

const TextInputField = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, containerStyle, labelStyle } = styles;
	//render() {
		return (
			<View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                underlineColorAndroid={'transparent'}
                autoCorrect={false}
            />
        </View>
			); 
};

export default TextInputField;
