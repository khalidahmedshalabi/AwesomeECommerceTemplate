import React, { Component } from 'react'
import { View, Image, I18nManager } from 'react-native'
import { Container, Body, Left, Right, Header, Button, Title, Text, Content, Input } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { mainColor } from '../../constants/Colors'


const formSpacing = 13

export default class Screen extends Component {
	state = {
		headerHeight: 20,
		angleHeight: 16.666666666666666666666666666667
	}

	render() {
		return (
			<Container>
				<Header
					onLayout={(event) => this.setState({ 
						headerHeight: event.nativeEvent.layout.height, 
						angleHeight: event.nativeEvent.layout.height / 1.2 })}
					noShadow={true}
					androidStatusBarColor='white'
					iosBarStyle='dark-content'
					style={{ backgroundColor: 'white' }}>
					<Left style={{ flex: 1 }}>
						<Button
							iconLeft
							style={{ backgroundColor: 'transparent', elevation: 0 }}>
							<Ionicons name={I18nManager.isRTL ? 'ios-arrow-forward' : 'ios-arrow-back'} size={23} color={mainColor} />
							<Text style={{ color: mainColor }} uppercase={false}>Back</Text>
						</Button>
					</Left>
					<Body style={{ flex: 1 }}>
						<Title style={{ color: 'black', alignSelf: 'center' }}>Checkout</Title>
					</Body>
					<Right style={{ flex: 1 }}>
						
					</Right>
				</Header>

				<View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 1, alignItems: 'center' }}>
					<View 
						style={{ 
							backgroundColor: '#505050', 
							width: 18, 
							height: 18, 
							borderRadius: 9, 
							justifyContent: 'center', 
							alignItems: 'center',
							marginLeft: 25
						}}>
						<Text style={{ color: 'white', textAlign: 'center', fontSize: 11 }}>1</Text>
					</View>

					<Text style={{ color: '#505050', marginLeft: 8 }}>Billing & Shipping</Text>

					<Image 
						source={I18nManager.isRTL ? require('../../assets/images/angle_left.png') : require('../../assets/images/angle_right.png')}
						style={{ height: this.state.angleHeight}} />

					<View
						style={{
							backgroundColor: '#eeeeee',
							width: 18,
							height: 18,
							borderRadius: 9,
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: 8
						}}>
						<Text style={{ color: '#afafaf', textAlign: 'center', fontSize: 11 }}>2</Text>
					</View>

					<Image
						source={I18nManager.isRTL ? require('../../assets/images/angle_left.png') : require('../../assets/images/angle_right.png')}
						style={{ height: this.state.angleHeight }} />

					<View
						style={{
							backgroundColor: '#eeeeee',
							width: 18,
							height: 18,
							borderRadius: 9,
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: 8
						}}>
						<Text style={{ color: '#afafaf', textAlign: 'center', fontSize: 11 }}>3</Text>
					</View>

					<Image
						source={I18nManager.isRTL ? require('../../assets/images/angle_left.png') : require('../../assets/images/angle_right.png')}
						style={{ height: this.state.angleHeight }} />

					<View
						style={{
							backgroundColor: '#eeeeee',
							width: 18,
							height: 18,
							borderRadius: 9,
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: 8
						}}>
						<Text style={{ color: '#afafaf', textAlign: 'center', fontSize: 11 }}>4</Text>
					</View>

					<Image
						source={I18nManager.isRTL ? require('../../assets/images/angle_left.png') : require('../../assets/images/angle_right.png')}
						style={{ height: this.state.angleHeight }} />
				</View>
				
				<Content>
					<View style={{ backgroundColor: 'white', margin: 14, padding: 14 }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={{ fontWeight: 'bold', color: 'black', marginBottom: formSpacing }}>BILLING INFO</Text>
							
							<View 
								style={{ 
									width: 15, 
									height: 15, 
									borderRadius: 1, 
									backgroundColor: mainColor,
									justifyContent: 'center',
								}}>
								<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>-</Text>
							</View>
						</View>
						
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}>
							<Input
								style={{ fontSize: 14, backgroundColor: '#eeeeee', marginRight: 7 }}
								placeholder='First Name' placeholderTextColor='#afafaf' />

							<Input
								style={{ fontSize: 14, backgroundColor: '#eeeeee', marginLeft: 7 }}
								placeholder='Last Name' placeholderTextColor='#afafaf' />
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}>
							<Input
								style={{ fontSize: 14, backgroundColor: '#eeeeee', marginRight: 7 }}
								placeholder='Phone Number' placeholderTextColor='#afafaf' />

							<Input
								style={{ fontSize: 14, backgroundColor: '#eeeeee', marginLeft: 7 }}
								placeholder='Email' placeholderTextColor='#afafaf' />
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}>
							<Input
								style={{ fontSize: 14, backgroundColor: '#eeeeee' }}
								placeholder='Address' placeholderTextColor='#afafaf' />
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}>
							<Input
								onLayout={(event) => this.setState({
									inputWidth: event.nativeEvent.layout.width,
								})}
								style={{ fontSize: 14, backgroundColor: '#eeeeee', marginRight: 7 }}
								placeholder='City' placeholderTextColor='#afafaf' />

							<Input
								style={{ fontSize: 14, backgroundColor: '#eeeeee', marginLeft: 7 }}
								placeholder='Zip Code' placeholderTextColor='#afafaf' />
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}>
							<Input
								style={{ width: this.state.inputWidth, fontSize: 14, backgroundColor: '#eeeeee', marginRight: 7 }}
								placeholder='State' placeholderTextColor='#afafaf' />
							
							<View style={{ width: this.state.inputWidth, flexDirection: 'row', backgroundColor: '#eeeeee', marginLeft: 7, justifyContent: 'center' }}>
								<Input
									style={{ fontSize: 14 }}
									placeholder='Country' placeholderTextColor='#afafaf' />

								<Ionicons style={{ alignSelf: 'center', marginRight: 10 }} name='ios-arrow-down' size={17} color='#afafaf' />
							</View>
						</View>
					</View>

					<View style={{ backgroundColor: 'white', marginHorizontal: 14, marginBottom: 14, padding: 14 }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
							<Text style={{ fontWeight: 'bold', color: 'black' }}>SHIPPING ADDRESS</Text>

							<View
								style={{
									width: 15,
									height: 15,
									borderRadius: 1,
									backgroundColor: mainColor,
									justifyContent: 'center',
								}}>
								<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>+</Text>
							</View>
						</View>
					</View>

					<Button
						full
						style={{ backgroundColor: mainColor, elevation: 0, marginHorizontal: 14, marginBottom: 14 }}>
						<Text style={{ color: 'white' }}>CONTINUE</Text>
					</Button>
				</Content>
			</Container>
		)
	}
}