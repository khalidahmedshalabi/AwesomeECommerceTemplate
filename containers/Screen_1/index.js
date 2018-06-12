import React, { Component } from 'react'
import { Dimensions, View, Text, StatusBar, Platform } from 'react-native'
import { LinearGradient } from 'expo';
import {
	/*BallIndicator,
	BarIndicator,
	DotIndicator,
	/*MaterialIndicator,
	PacmanIndicator,
	PulseIndicator,*/
	SkypeIndicator,
	/*UIActivityIndicator
  	WaveIndicator,*/
} from 'react-native-indicators'; 
import { MaterialIcons } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Screen extends Component {
	componentWillMount() {
		if (Platform.OS == 'android') {
			StatusBar.setTranslucent(true);
			StatusBar.setBackgroundColor('transparent');
		}
	}

	/*componentWillUnmount() {
		if (Platform.OS == 'android')
			StatusBar.setTranslucent(false);
	}*/

	render () {
		return (
			<LinearGradient 
				colors={['#19d7fb', '#1e63ee']}
				start={{ x: 0.0, y: 1.0 }}
				end={{ x: 1.0, y: 0.0 }}
				style={{
					width: width,
					height: height,
					justifyContent: 'flex-start',
					alignItems: 'center'
				}}>
				<View style={{ position: 'absolute', marginTop: height * 0.28, alignItems: 'center' }}>
					<MaterialIcons 
						name='store' color='white' size={55} />

					<Text style={{ color: 'white', fontSize: 43, fontWeight: 'bold' }}>AWESOME</Text>
					<Text style={{ color: '#EEEEEE', fontSize: 20 }}>e-Commerce Shop Template</Text>
				</View>
				
				<View style={{ alignItems: 'center', position: 'absolute', marginTop: height * 0.7 }}>
					<Text style={{ color: '#EEEEEE', fontSize: 17 }}>Loading...</Text>
					<SkypeIndicator style={{ marginTop: 20 }} color='white' count={8} size={50} />
				</View>
			</LinearGradient>
		)
	}
}