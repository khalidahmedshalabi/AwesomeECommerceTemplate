import React, { Component } from 'react'
import { View, Image, I18nManager } from 'react-native'
import { Container, Body, Left, Right, Header, Button, Title, Text, Content, Input,Item } from 'native-base'
import { Ionicons,FontAwesome,Foundation } from '@expo/vector-icons';
import { mainColor } from '../../constants/Colors'
import { buttonBorderRadius, inputBorderRadius } from '../../constants/gStyles';
import ModalSelector from 'react-native-modal-selector';
const formSpacing = 13

export default class Screen extends Component {
	state = {
		headerHeight: 20,
		angleHeight: 16.666666666666666666666666666667
	}

	render() {
		const data = [
			{ key: 0, label: 'Brazil' },
			{ key: 1, label: 'Russia' },
			{ key: 2, label: 'Spain' },
			{ key: 3, label: 'England' },
			{ key: 4, label: 'Germany' },
			{ key: 5, label: 'Italy' },
		];
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

						<Foundation name='italic' size={40} color='#505050' style={{paddingLeft:5,marginTop:3}}/>
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

					<Foundation name='italic' size={40} color='#eeeeee' style={{paddingLeft:5,marginTop:3}} />
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

					<Foundation name='italic' size={40} color='#eeeeee' style={{paddingLeft:5,marginTop:3}} />
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
					<Foundation name='italic' size={40} color='#eeeeee' style={{paddingLeft:5,marginTop:3}}/>
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
								<Text style={{ color: 'white',top:-3, textAlign: 'center', fontWeight: 'bold' }}>-</Text>
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

							<ModalSelector data={data} initValue="Country" supportedOrientations={['portrait']} accessible={true}
								scrollViewAccessibilityLabel={'Scrollable options'} cancelButtonAccessibilityLabel={'Cancel Button'}
								cancelText='Cancel' optionTextStyle={{ color: mainColor }} touchableStyle={{ flex: 1 }}
								childrenContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',flex: 1}}
								onChange={(option) => { this.setState({ textInputValue: option.label }) }}>
								<Item style={{ width: this.state.inputWidth, flexDirection: 'row', backgroundColor: '#eeeeee', marginLeft: 7, justifyContent: 'center' }}>
								<Input
									style={{ fontSize: 14 }}
									placeholder='Country' placeholderTextColor='#afafaf' />
								<Ionicons style={{ alignSelf: 'center', marginRight: 10 }} name='ios-arrow-down' size={17} color='#afafaf' />
								</Item>
							</ModalSelector>
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
								<Text style={{ color: 'white',top:-3,textAlign:'center', fontWeight: 'bold' }}>+</Text>
							</View>
						</View>
					</View>
					<Button
						full
						style={{ backgroundColor: mainColor, elevation: 0, marginHorizontal: 14, marginBottom: 14,borderRadius:buttonBorderRadius }}>
						<Text style={{ color: 'white' }}>CONTINUE</Text>
					</Button>
				</Content>
			</Container>
		)
	}
}
