import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Stars from 'react-native-stars-rating'
import { mainColor } from '../../constants/Colors';
import ProductCard from '../../components/ProductCard/index';
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
		return (
			<ProductCard navigation={this.props.navigation}
				title={item.title}
				description={item.description}
				currentPrice={item.currentPrice}
				OldPrice={item.oldPrice}
				stars={item.stars}
				buttonwishlist={true}/>
		)
	}

	render() {
		return (
			<View style={{flex: 1, backgroundColor: 'white'}}>
				<FlatList
					style={{ flex:1 }}
					data = {this.state.products}
					contentContainerStyle={{ paddingVertical: 14 }}
					ItemSeparatorComponent={() => <View style={{ backgroundColor: '#dedede', height: 1 }}></View>}
					renderItem = {({ item }) => this.renderProduct(item)} />
			</View>
		)
	}
}
