import React, { Component } from 'react'
import { Dimensions, View, StatusBar, Platform } from 'react-native'
import { Button, Text } from 'native-base'
import { LinearGradient } from 'expo';
import { FontAwesome } from '@expo/vector-icons';

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
				colors={['#e9bc76', '#f2817b']}
				start={{ x: 0.0, y: 1.0 }}
				end={{ x: 1.0, y: 0.0 }}
				style={{
					width: width,
					height: height,
					justifyContent: 'flex-start',
					alignItems: 'center'
				}}>
				<View style={{ position: 'absolute', marginTop: height * 0.28, alignItems: 'center' }}>
					<FontAwesome 
						name='shopping-basket' color='white' size={55} />

					<Text style={{ color: 'white', fontSize: 43, fontWeight: 'bold' }}>INGE</Text>
					<Text style={{ color: '#EEEEEE', fontSize: 20 }}>e-Commerce Shop UI App Template</Text>
				</View>
				
				<View style={{ alignItems: 'center', position: 'absolute', marginTop: height * 0.7 }}>
					<Button style={{ 
						elevation: 0, 
						backgroundColor: 'transparent', 
						borderColor: 'white', 
						borderWidth: 1.5,
						width: width * 0.7,
						alignItems: 'center',
						justifyContent: 'center',
						marginBottom: 37
					}}>
						<Text style={{ color: 'white', fontSize: 18 }} uppercase={false}>Login</Text>
					</Button>

					<Button style={{ 
						elevation: 0, 
						backgroundColor: 'transparent', 
						borderColor: 'white', 
						borderWidth: 1.5,
						width: width * 0.7,
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<Text style={{ color: 'white', fontSize: 18 }} uppercase={false}>Register</Text>
					</Button>
				</View>
			</LinearGradient>
		)
	}
}