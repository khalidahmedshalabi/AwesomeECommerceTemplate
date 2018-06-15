import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, I18nManager } from 'react-native'
import { Container, Body, Left, Right, Header, Button, Title, Text, Content } from 'native-base'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { mainColor } from '../../constants/Colors';
import { imageBorderRadius,buttonBorderRadius, inputBorderRadius,boxBorderRadius } from '../../constants/gStyles';
const formSpacing = 6

export default class Reviews extends Component {
	constructor() {
		super()

		this.state = {
			products: [
				{
					key: '1',
					title: 'Product 1',
					size: 'XL',
					color: 'White',
					code: 'B01J88GV0C',
					price: 159,
					subtotal: 318,
					quantity: 2
				},
				{
					key: '2',
					title: 'Product 2',
					size: 'XS',
					color: 'Yellow',
					code: 'B01J88GV0C',
					price: 210,
					subtotal: 210,
					quantity: 1
				},
			],
			subtotal: 528,
			shipping: 10,
			total: 538
		}
	}

	onCheckout = () => {
		alert('Checkout')
	}

	renderCartItem = (item) => (
		<View style={{ flex: 1, flexDirection: 'row', borderRadius: boxBorderRadius, backgroundColor: 'white' }}>
			<View style={{ flex: 0.6, padding: 12, justifyContent: 'center', alignItems: 'center' }}>
				<View style={{ flex: 0.94, width: '100%', backgroundColor: '#c8c8c8', marginBottom: 10 ,borderRadius:imageBorderRadius}}></View>

				<View style={{ flexDirection: 'row', flex: 0.06,top:5 }}>
					<TouchableOpacity
						style={{ backgroundColor:mainColor, justifyContent: 'center', paddingHorizontal:9.5,paddingTop:2.8 ,height:26,width:26,borderRadius:13,marginRight:5}}>
						<Ionicons name='md-remove' size={17} color='white' />
					</TouchableOpacity>
					<TouchableOpacity
					style={{ backgroundColor:'#eeeeee', justifyContent: 'center', paddingHorizontal:1,paddingTop:2.5 ,height:30,width:30,borderRadius:15,top:-3}}>
					<Text
						style={{backgroundColor: 'transparent',color: '#afafaf',paddingHorizontal: 9,textAlign: 'center',textAlignVertical: 'center',}}>{item.quantity}</Text>
						</TouchableOpacity>
					<TouchableOpacity
						style={{ backgroundColor:mainColor, justifyContent: 'center',paddingHorizontal:7.5,paddingTop:2.8,height:26,width:26,borderRadius:13,marginLeft:5}}>
						<Ionicons name='md-add' size={17} color= 'white' />
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ flex: 1, justifyContent: 'center', padding: 12 }}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<Text style={{ fontWeight: 'bold' }}>{item.title}</Text>

					<View
						style={{
							//backgroundColor: '#5ac8fa',
							paddingVertical: 3,
							paddingHorizontal: 4
						}}>
						<Ionicons name='ios-close-circle-outline' color='#5ac8fa' size={27} />
					</View>
				</View>

				<View style={{ marginTop: formSpacing }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Size: </Text>
						<Text style={{ color: '#969696', fontSize: 13, marginBottom: formSpacing }}>{item.size}</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Color: </Text>
						<Text style={{ color: '#969696', fontSize: 13, marginBottom: formSpacing }}>{item.color}</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Product Code: </Text>
						<Text style={{ color: '#969696', fontSize: 13, marginBottom: formSpacing }}>{item.code}</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Price: </Text>
						<Text style={{ color: '#969696', fontSize: 13, marginBottom: formSpacing }}>{item.price}$</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Subtotal: </Text>
						<Text style={{ color: mainColor, fontWeight: 'bold', fontSize: 13, marginBottom: formSpacing }}>{item.subtotal}$</Text>
					</View>
				</View>
			</View>
		</View>
	)

	render() {
		return (
			<Container style={{ paddingBottom: 14 }}>
				<Header
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
						<Title style={{ color: 'black', alignSelf: 'center' }}>Shopping Cart</Title>
					</Body>
					<Right style={{ flex: 1 }}>
						<Button
							transparent
							onPress={this.onCheckout}>
							<Text style={{ color: mainColor }} uppercase={false}>Checkout</Text>
						</Button>
					</Right>
				</Header>

				<Content>
					<FlatList
						data={this.state.products}
						style={{ flex: 1 }}
						contentContainerStyle={{ padding: 14 }}
						ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', height: 14 }}></View>}
						renderItem={({ item }) => this.renderCartItem(item)}
					/>

					<View style={{ marginHorizontal: 14, marginBottom: 14, padding: 14, backgroundColor: 'white' }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Subtotal:</Text>
							<Text style={{ color: '#969696', fontSize: 13, marginBottom: formSpacing }}>{this.state.subtotal}$</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Shipping:</Text>
							<Text style={{ color: '#969696', fontSize: 13, marginBottom: formSpacing }}>{this.state.shipping}$</Text>
						</View>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Total:</Text>
							<Text style={{ color: mainColor, fontWeight: 'bold', fontSize: 13, marginBottom: formSpacing }}>{this.state.total}$</Text>
						</View>
					</View>

					<Button
						full
						onPress={this.onCheckout}
						style={{ marginHorizontal: 14, backgroundColor: mainColor,borderRadius:buttonBorderRadius }}>
						<Text style={{ color: 'white' }}>CHECKOUT</Text>
					</Button>
				</Content>
			</Container>
		)
	}
}
