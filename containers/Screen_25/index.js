import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, I18nManager } from 'react-native'
import { Container, Body, Left, Right, Header, Button, Title, Badge, Text } from 'native-base'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars-rating'
import IconBadge from 'react-native-icon-badge'
import { mainColor } from '../../constants/Colors';

export default class Reviews extends Component {
	constructor() {
		super()

		this.state = {
			products: [
				{
					key: '1',
					title: 'Product 1',
					stars: 5,
					oldPrice: 0,
					currentPrice: 225,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '2',
					title: 'Product 2',
					stars: 3,
					oldPrice: 399,
					currentPrice: 299,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '3',
					title: 'Product 3',
					stars: 4,
					oldPrice: 0,
					currentPrice: 159,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '4',
					title: 'Product 4',
					stars: 2,
					oldPrice: 0,
					currentPrice: 140,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '5',
					title: 'Product 5',
					stars: 4,
					oldPrice: 180,
					currentPrice: 140,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
			]
		}
	}

	renderProduct = (item) => {
		const priceTag = <Text style={{ fontSize: 13, color: mainColor }}>{item.currentPrice}$</Text>
		const priceContainer = item.oldPrice === 0 ? priceTag : (
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ fontSize: 13, color: '#969696', textDecorationLine: 'line-through', marginRight: 3 }}>{item.oldPrice}$</Text>
				{priceTag}
			</View>
		)

		return (
			<View style={{ flex: 1, flexDirection: 'row', borderRadius: 1 }}>
				<View style={{ flex: 0.6, backgroundColor: '#c8c8c8' }}>

				</View>

				<View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 13, paddingVertical: 9, justifyContent: 'center' }}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
						<Text style={{ fontWeight: 'bold' }}>{item.title}</Text>

						<View
							style={{
								backgroundColor: mainColor,
								paddingVertical: 3,
								paddingHorizontal: 4
							}}>
							<Ionicons name='md-close' color='white' size={18} />
						</View>
					</View>

					<Stars
						isActive={false}
						rateMax={5}
						isHalfStarEnabled={false}
						onStarPress={(rating) => console.log(rating)}
						rate={item.stars}
						color='#f9e784'
						size={13}
					/>

					<Text style={{ color: '#969696', textAlign: 'justify', paddingVertical: 8 }}>{item.description}</Text>

					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
						{priceContainer}
						<View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: mainColor, padding: 6, borderRadius: 1 }}>
							<Ionicons name='md-add' color='white' size={14} />
							<Text style={{ color: 'white', fontSize: 12, marginLeft: 3 }}>ADD TO CART</Text>
						</View>
					</View>
				</View>
			</View>
		)
	}

	render() {
		return (
			<Container>
				<Header
					noShadow={true}
					androidStatusBarColor='white'
					iosBarStyle='dark-content'
					style={{ backgroundColor: 'white' }}>
					<Left style={{ flex: 1 }}>
						<TouchableOpacity style={{ flexDirection: 'row' }}>
							<Ionicons style={{ marginRight: 8 }} name={I18nManager.isRTL ? 'ios-arrow-forward' : 'ios-arrow-back'} size={23} color={mainColor} />
							<Text style={{ color: mainColor }} uppercase={false}>Back</Text>
						</TouchableOpacity>
					</Left>
					<Body style={{ flex: 1 }}>
						<Title style={{ color: 'black', alignSelf: 'center' }}>Wishlist</Title>
					</Body>
					<Right style={{ flex: 1 }}>
						<TouchableOpacity>
							<IconBadge
								MainElement={
									<View
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "space-between",
											height: 43,
											width: 43,
										}}>
										<FontAwesome name='shopping-cart' size={26} color={mainColor} />
									</View>
								}
								BadgeElement={
									<Text style={{ color: 'white', fontSize: 10 }}>2</Text>
								}
								IconBadgeStyle={
									{
										backgroundColor: 'black',
									}
								}
							/>
						</TouchableOpacity>
					</Right>
				</Header>

				<FlatList
					data={this.state.products}
					style={{ flex: 1 }}
					contentContainerStyle={{ padding: 14 }}
					ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', height: 14 }}></View>}
					renderItem={({ item }) => this.renderProduct(item)}
				/>
			</Container>
		)
	}
}