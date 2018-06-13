import React, { Component } from 'react'
import { Dimensions, View, Text, StatusBar, Platform, TextInput, KeyboardAvoidingView } from 'react-native'
import { Button } from 'native-base'
import { LinearGradient } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import { mainColor } from '../../constants/Colors'
import { inputBorderRadius, buttonBorderRadius } from '../../constants/gStyles';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Screen extends Component {
	componentWillMount() {
		if (Platform.OS == 'android') {
			StatusBar.setTranslucent(true);
			StatusBar.setBackgroundColor('transparent');
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			email: '',
		}
	}

	/*componentWillUnmount() {
		if (Platform.OS == 'android')
			StatusBar.setTranslucent(false);
	}*/

	validate = () => {
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(reg.test(this.state.email) === false)
			alert("Email is Not Correct");
		else
			alert("Email is Correct");
	}
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
				<View style={{ position: 'absolute', marginTop: height * 0.15, alignItems: 'center' }}>
					<MaterialIcons 
						name='store' color='white' size={55} />

					<Text style={{ color: 'white', fontSize: 43, fontWeight: 'bold' }}>AWESOME</Text>
					<Text style={{ color: '#EEEEEE', fontSize: 20 }}>e-Commerce Shop Template</Text>
				</View>
				
				<View style= {{
					alignItems: 'center',
					position: 'absolute',
					marginTop: height * 0.56596701649175412293853073463268,
					width: width * 0.85
				}}>
					<TextInput
						onChangeText={email => this.setState({ email })}
						placeholder='Your Email'
						placeholderTextColor='#afafaf'
						underlineColorAndroid='transparent'
						style={{ backgroundColor: '#eeeeee', width: '100%', paddingLeft: 8, marginBottom: width * 0.03, borderRadius: inputBorderRadius }} />

					<Button block style={{ elevation: 0, backgroundColor: mainColor, borderRadius: buttonBorderRadius }} onPress={this.validate} >
						<Text style={{ color: 'white'}}>SEND</Text>
					</Button>
				</View>
			</LinearGradient>
		)
	}
}