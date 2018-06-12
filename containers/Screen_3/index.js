import React, { Component } from 'react'
import { Dimensions, View, Text, StatusBar, Platform, TextInput, KeyboardAvoidingView } from 'react-native'
import { Button } from 'native-base'
import { LinearGradient } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import CountryPicker from 'react-native-country-picker-modal'

const PNF = require('google-libphonenumber').PhoneNumberFormat;
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance(); 
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const isSmallHeight = height <= 680;

export default class Screen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cca2: 'JO',
			callingCode: '962',
		  phoneNumber: '0000000000'
		}
	  }
	  validNumber = () => {
		const number = phoneUtil.parseAndKeepRawInput(this.state.phoneNumber, this.state.cca2.toUpperCase());
		const validation = phoneUtil.isValidNumber(number);
		if(validation)
			alert('valid number')
		else
			alert('unvalid number')
	  }
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
				<View style={{ position: 'absolute', marginTop: height * 0.12, alignItems: 'center' }}>
					<FontAwesome 
						name='shopping-basket' color='white' size={55} />

					<Text style={{ color: 'white', fontSize: 43, fontWeight: 'bold' }}>INGE</Text>
					<Text style={{ color: '#EEEEEE', fontSize: 20 }}>e-Commerce Shop UI App Template</Text>
				</View>
				
				<View style= {{
					alignItems: 'center',
					position: 'absolute',
					marginTop: height * 0.36,
					width: width * 0.835,
				}}>
					<KeyboardAvoidingView 
						behavior='position'
						keyboardVerticalOffset={60}
						style={{ 
							backgroundColor: 'white',
							borderRadius: 1,
							padding: width * 0.03,
							width: '100%'
						}}>
						
						<View style={{ flexDirection: 'row', }} >
						<View style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
							<CountryPicker
								onChange={value => {
									this.setState({ cca2: value.cca2, callingCode: value.callingCode })
								}}
								cca2={this.state.cca2}
								translation="eng"
							/>
						</View>
						<Text style={{ position: 'absolute', top: 15, left: 42, color: '#afafaf', zIndex: 1 }} >{`+${this.state.callingCode}`}</Text>
						<TextInput
							ref={ref => {
								this.phone = ref;
							  }}
							onChangeText={phoneNumber => this.setState({ phoneNumber: phoneNumber.toString() })}
							keyboardType={'phone-pad'}
							placeholder='Phone Number'
							placeholderTextColor='#afafaf'
							underlineColorAndroid='transparent'
							style={{ backgroundColor: '#eeeeee', width: '100%', paddingLeft: 8, marginBottom: width * 0.03, paddingLeft: 80 }} />
						</View>

						<TextInput
							placeholder='Password'
							placeholderTextColor='#afafaf'
							underlineColorAndroid='transparent'
							secureTextEntry={true}
							style={{ backgroundColor: '#eeeeee', width: '100%', paddingLeft: 8, marginBottom: width * 0.03 }} />

						<Button block iconLeft style={{ elevation: 0, backgroundColor: '#ff6e66' }} onPress={this.validNumber} >
							<Text style={{ color: 'white'}}>START</Text>
						</Button>
					</KeyboardAvoidingView>

					<Text style={{ color: 'white', fontSize: 17, marginVertical: 8 }}>or sign in with</Text>

					<View style={{
						flex: 1,
						width: '100%',
						flexDirection: isSmallHeight ? 'row' : 'column',
						justifyContent: isSmallHeight ? 'space-between' : 'flex-start'
					}}>
						<Button block style={{ elevation: 0, backgroundColor: '#3e6c9d', paddingHorizontal: 8, marginBottom: 8 }}>
							<FontAwesome
								name='facebook'
								color='white'
								size={16}
								style={{ marginRight: 10 }} />
							<Text style={{ color: 'white' }}>FACEBOOK</Text>
						</Button>

						<Button block style={{ elevation: 0, backgroundColor: '#eb3f2f', paddingHorizontal: 8 }}>
							<FontAwesome
								name='google'
								color='white'
								size={16}
								style={{ marginRight: 10 }} />
							<Text style={{ color: 'white' }}>GOOGLE</Text>
						</Button>
					</View>
				</View>

				<View style={{ alignItems: 'center', position: 'absolute', marginTop: height * 0.945 }}>
					<Text style={{ color: 'white', fontSize: 17 }}>Forgot your password?</Text>
				</View>
			</LinearGradient>
		)
	}
}