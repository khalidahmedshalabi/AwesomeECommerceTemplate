import React, { Component } from 'react'
import { View, Image, I18nManager } from 'react-native'
import { Container, Body, Left, Right, Header, Button, Title, Text, Radio } from 'native-base'
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
			<Container style={{ paddingBottom: 14 }}>
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

					<Image 
						source={I18nManager.isRTL ? require('../../assets/images/angle_left.png') : require('../../assets/images/angle_right.png')}
						style={{ height: this.state.angleHeight}} />

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

					<Text style={{ color: '#505050', marginLeft: 8 }}>Shipping Method</Text>

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

				<View style={{ backgroundColor: 'white', margin: 14, padding: 14 }}>
					<View style={{ flexDirection: 'row', marginBottom: formSpacing }}>
						<View>
							<Radio selected={true} color='#eeeeee' selectedColor='#afafaf' />
						</View>

						<View>
							<Text style={{ color: '#505050', marginLeft: 10, textAlign: 'left' }}>DHL</Text>
							<Text style={{ color: '#969696', marginLeft: 10, textAlign: 'left' }}>Free Shipping | Delivery in 4-5 Days</Text>
						</View>
					</View>

					<View style={{ flexDirection: 'row', marginBottom: formSpacing }}>
						<View>
							<Radio selected={false} color='#eeeeee' selectedColor='#afafaf' />
						</View>

						<View>
							<Text style={{ color: '#505050', marginLeft: 10, textAlign: 'left' }}>UPS</Text>
							<Text style={{ color: '#969696', marginLeft: 10, textAlign: 'left' }}>Free Shipping | Delivery in 7-8 Days</Text>
						</View>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<View>
							<Radio selected={false} color='#eeeeee' selectedColor='#afafaf' />
						</View>

						<View>
							<Text style={{ color: '#505050', marginLeft: 10, textAlign: 'left' }}>Fedex</Text>
							<Text style={{ color: '#969696', marginLeft: 10, textAlign: 'left' }}>Free Shipping | Delivery in 7-8 Days</Text>
						</View>
					</View>
				</View>

				<Button
					full
					style={{ backgroundColor: mainColor, elevation: 0, marginHorizontal: 14 }}>
					<Text style={{ color: 'white' }}>CONTINUE</Text>
				</Button>
			</Container>
		)
	}
}