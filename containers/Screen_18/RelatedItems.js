import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars-rating'
import { colorOrange } from '../../constants/Colors';

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
					badgeText: 'NEW',
					badgeColor: '#f7b267',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '2',
					title: 'Product 2',
					stars: 3,
					oldPrice: 399,
					currentPrice: 299,
					badgeText: 'HOT',
					badgeColor: '#4ecdc4',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '3',
					title: 'Product 3',
					stars: 4,
					oldPrice: 0,
					currentPrice: 159,
					badgeText: '',
					badgeColor: '',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '4',
					title: 'Product 4',
					stars: 2,
					oldPrice: 0,
					currentPrice: 140,
					badgeText: '',
					badgeColor: '',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '5',
					title: 'Product 5',
					stars: 4,
					oldPrice: 180,
					currentPrice: 140,
					badgeText: '',
					badgeColor: '',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
			]
		}
	}

	renderProduct = (item) => {
		const priceTag = <Text style={{ fontSize: 13, color: colorOrange }}>{item.currentPrice}$</Text>
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

						{
							(item.badgeColor && item.badgeText) ? <Text style={{
								color: 'white',
								backgroundColor: item.badgeColor,
								padding: 4,
								fontSize: 12
							}}>{item.badgeText}</Text> : null
						}
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
						<View style={{ flexDirection: 'row' }}>
							<View style={{ backgroundColor: colorOrange, padding: 6, borderRadius: 1, marginRight: 3 }}>
								<Ionicons name='ios-heart-outline' color='white' size={18} />
							</View>

							<View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colorOrange, padding: 6, borderRadius: 1 }}>
								<Ionicons name='md-add' color='white' size={14} />
								<Text style={{ color: 'white', fontSize: 12, marginLeft: 3 }}>ADD TO CART</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		)
	}

	render() {
		return (
			<FlatList
				data={this.state.products}
				style={{ flex: 1 }}
				contentContainerStyle={{ padding: 14 }}
				ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', height: 14 }}></View>}
				renderItem={({ item }) => this.renderProduct(item)}
			/>
		)
	}
}