import React, { Component } from 'react'
import { View, Image, I18nManager } from 'react-native'
import { Container, Body, Left, Right, Header, Button, Title, Text, Content } from 'native-base'
import { Ionicons,Foundation } from '@expo/vector-icons';
import { mainColor } from '../../constants/Colors'
import { buttonBorderRadius, inputBorderRadius } from '../../constants/gStyles';

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
							onPress={() => this.props.navigation.goBack()}
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
					<Foundation name='italic' size={40} color='#eeeeee' style={{paddingLeft:5,marginTop:3}}/>

					<View
						style={{
							backgroundColor: '#505050',
							width: 18,
							height: 18,
							borderRadius: 9,
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: 8
						}}>
						<Text style={{ color: 'white', textAlign: 'center', fontSize: 11 }}>2</Text>
					</View>

					<Foundation name='italic' size={40} color='#eeeeee' style={{paddingLeft:5,marginTop:3}}/>
					<View
						style={{
							backgroundColor: '#505050',
							width: 18,
							height: 18,
							borderRadius: 9,
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: 8
						}}>
						<Text style={{ color: 'white', textAlign: 'center', fontSize: 11 }}>3</Text>
					</View>

					<Foundation name='italic' size={40} color='#eeeeee' style={{paddingLeft:5,marginTop:3}}/>
					<View
						style={{
							backgroundColor: '#505050',
							width: 18,
							height: 18,
							borderRadius: 9,
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: 8
						}}>
						<Text style={{ color: 'white', textAlign: 'center', fontSize: 11 }}>4</Text>
					</View>

					<Text style={{ color: '#505050', marginLeft: 8 }}>Confirm Order</Text>

					<Foundation name='italic' size={40} color='#505050' style={{paddingLeft:5,marginTop:3}}/>
				</View>

				<Content>
					<View style={{ backgroundColor: 'white', margin: 14, padding: 14 }}>
						<Text style={{ fontWeight: 'bold', color: 'black', marginBottom: formSpacing }}>ORDER DETAILS</Text>

						<View style={{ marginBottom: formSpacing }}>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
								<Text style={{ color: 'black' }}>Blouse & Cap x 2</Text>
								<Text style={{ color: mainColor }}>318$</Text>
							</View>

							<View style={{ flexDirection: 'row' }}>
								<Text style={{ color: 'black' }}>Size: </Text>
								<Text style={{ color: '#969696' }}>XL</Text>
							</View>

							<View style={{ flexDirection: 'row' }}>
								<Text style={{ color: 'black' }}>Color: </Text>
								<Text style={{ color: '#969696' }}>White</Text>
							</View>

							<View style={{ flexDirection: 'row' }}>
								<Text style={{ color: 'black' }}>Product Code: </Text>
								<Text style={{ color: '#969696' }}>B01J88GV0C</Text>
							</View>
						</View>

						<View>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
								<Text style={{ color: 'black' }}>Cardigan Sweater x 1</Text>
								<Text style={{ color: mainColor }}>210$</Text>
							</View>

							<View style={{ flexDirection: 'row' }}>
								<Text style={{ color: 'black' }}>Size: </Text>
								<Text style={{ color: '#969696' }}>XL</Text>
							</View>

							<View style={{ flexDirection: 'row' }}>
								<Text style={{ color: 'black' }}>Color: </Text>
								<Text style={{ color: '#969696' }}>Yellow</Text>
							</View>

							<View style={{ flexDirection: 'row' }}>
								<Text style={{ color: 'black' }}>Product Code: </Text>
								<Text style={{ color: '#969696' }}>B01G88GV0C</Text>
							</View>
						</View>
					</View>

					<View style={{ backgroundColor: 'white', marginHorizontal: 14, marginBottom: 14, padding: 14 }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
							<Text style={{ color: 'black' }}>Subtotal:</Text>
							<Text style={{ color: '#969696' }}>528$</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
							<Text style={{ color: 'black' }}>Shipping:</Text>
							<Text style={{ color: '#969696' }}>10$</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={{ color: 'black' }}>Total:</Text>
							<Text style={{ color: mainColor }}>538$</Text>
						</View>
					</View>

					<Button
						full
						style={{ backgroundColor: mainColor, elevation: 0, marginHorizontal: 14, marginBottom: 14,borderRadius:buttonBorderRadius }}>
						<Text style={{ color: 'white' }}>CONFIRM YOUR ORDER</Text>
					</Button>
				</Content>
			</Container>
		)
	}
}
