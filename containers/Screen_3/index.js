import React, { Component } from 'react'
import { Dimensions, View, Text, StatusBar, Platform, TextInput, KeyboardAvoidingView } from 'react-native'
import { Button } from 'native-base'
import { LinearGradient } from 'expo';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import LazyContainer from '../../components/LazyContainer'
import { mainColor } from '../../constants/Colors'
import { buttonBorderRadius, inputBorderRadius } from '../../constants/gStyles';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const isSmallHeight = height <= 680;

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
			<LazyContainer style={{ flex: 1 }}>
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
					<View style={{ position: 'absolute', marginTop: height * 0.12, alignItems: 'center' }}>
						<MaterialIcons 
							name='store' color='white' size={55} />

						<Text style={{ color: 'white', fontSize: 43, fontWeight: 'bold' }}>AWESOME</Text>
						<Text style={{ color: '#EEEEEE', fontSize: 20 }}>e-Commerce Shop Template</Text>
					</View>

					<View style= {{
						alignItems: 'center',
						position: 'absolute',
						marginTop: height * 0.36,
						width: width * 0.835,
						paddingTop: 25
					}}>


					<TextInput
						keyboardType={'phone-pad'}
						placeholder='Phone Number'
						placeholderTextColor='#afafaf'
						underlineColorAndroid='transparent'
						style={{ 
							backgroundColor: '#eeeeee',
							width: '100%',
							paddingLeft: 8,
							marginBottom: width * 0.03,
							borderRadius: inputBorderRadius
						}} />


					<TextInput
						placeholder='Password'
						placeholderTextColor='#afafaf'
						underlineColorAndroid='transparent'
						secureTextEntry={true}
						style={{ 
							backgroundColor: '#eeeeee', 
							width: '100%', 
							paddingLeft: 8, 
							marginBottom: width * 0.03,
							borderRadius: inputBorderRadius
						}} />

					<Button block iconLeft style={{ elevation: 0, backgroundColor: mainColor, borderRadius: buttonBorderRadius }} onPress={this.validNumber} >
						<Text style={{ color: 'white'}}>SIGN IN</Text>
					</Button>

						<Text style={{ color: 'white', fontSize: 17, marginVertical: 8 }}>Or with</Text>

						<View style={{
							flex: 1,
							width: '100%',
							flexDirection: isSmallHeight ? 'row' : 'column',
							justifyContent: isSmallHeight ? 'space-between' : 'flex-start'
						}}>
							<Button block 
							style={{ 
								elevation: 0,
								backgroundColor: '#3e6c9d',
								paddingHorizontal: 15,
								marginBottom: 8,
								borderRadius: buttonBorderRadius 
							}}>
								<FontAwesome
									name='facebook'
									color='white'
									size={16}
									style={{marginRight: 10}} />
								<Text style={{ color: 'white' }}>FACEBOOK</Text>
							</Button>

							<Button block 
							style={{ 
								elevation: 0,
								backgroundColor: '#eb3f2f',
								paddingHorizontal: 15,
								borderRadius: buttonBorderRadius 
							}}>
								<FontAwesome
									name='google'
									color='white'
									size={16}
									style={{marginRight: 10}} />
								<Text style={{ color: 'white' }}>GOOGLE</Text>
							</Button>
						</View>
					</View>

					<View style={{ alignItems: 'center', position: 'absolute', marginTop: height * 0.85}}>
						<Text style={{ color: 'white', fontSize: 17 }}>Forgot your password?</Text>
					</View>
				</LinearGradient>
			</LazyContainer>
		)
	}
}
