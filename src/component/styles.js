'use strict';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

	inputStyle: {
		paddingRight: 10,
       paddingLeft: 10,
       paddingBottom: 0,
       color: 'black',
       fontSize: 16,
       fontWeight: '100',
       flex: 1,
       height: 250,
       width: 300,
       borderColor: 'white',
       borderWidth: 1,

       alignItems: 'center'
	},

	containerStyle: {
		height: 70,
       flexDirection: 'column',
       alignItems: 'center',
       width: '100%',
       borderColor: 'black',
       borderBottomWidth: 0,
	},

	errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

    textStyle: {
    color: '#3E446C',
    fontSize: 16,
    paddingTop: 3,
    paddingLeft: 0,
    alignSelf: 'center'
    }, 

    labelStyle: {
    color: 'black',
    fontSize: 17,
    paddingTop: 3,
    paddingBottom: 3
    },

    mainText: {
    fontSize: 22,
    color: '#3E446C',
    alignSelf: 'center',
    paddingTop: 150,
    paddingBottom: 0 
    },

    orStyle: {
   	fontSize: 14,
   	color: '#3E446C',
   	alignSelf: 'center',
   	paddingTop: 15
    },

    signupText: {
    	color: '#3E446C',
    	fontSize: 16,
    	alignSelf: 'center',
    	paddingTop: 240
    }
});

export default styles;
