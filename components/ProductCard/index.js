import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import Stars from 'react-native-stars-rating'
import { mainColor } from '../../constants/Colors';
import { imageBorderRadius } from '../../constants/gStyles';
export default class ProductCard extends Component {
	render() {
		const priceTag = <Text style={{ fontSize: 13, color: mainColor }}>{this.props.currentPrice}$</Text>
		const priceContainer = this.props.oldPrice === 0 ? priceTag : (
			<View style={{ flexDirection: 'column' }}>
				<Text style={{ fontSize: 13, color: '#969696', textDecorationLine: 'line-through', marginRight: 3 }}>{this.props.oldPrice}$</Text>
				{priceTag}
			</View>
		)

		return (
			<View style={{ flex: 1, flexDirection: 'row', borderRadius: 1, paddingVertical: 10, paddingLeft: 10 }}>
				<View style={{ flex: 0.6, backgroundColor: '#c8c8c8', borderRadius: imageBorderRadius }}>
				</View>
				<View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 13, paddingVertical: 9, justifyContent: 'center' }}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
						<Text style={{ fontWeight: 'bold' }}>{this.props.title}</Text>
						{
							(this.props.badgeColor && this.props.badgeText) ? <Text style={{
								color: 'white',
								backgroundColor: this.props.badgeColor,
								borderRadius: 5,
								padding: 4,
								fontSize: 12
							}}>{this.props.badgeText}</Text> : null
						}
					</View>
					<Stars
						isActive={false}
						rateMax={5}
						isHalfStarEnabled={false}
						onStarPress={(rating) => console.log(rating)}
						rate={this.props.stars}
						color='#f9e784'
						size={13}
					/>
					<Text style={{ color: '#969696', textAlign: 'justify', paddingVertical: 8 }}>{this.props.description}</Text>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
								{priceContainer}
								<View style={{ flexDirection: 'row' }}>
									<View style={{ backgroundColor: 'white',borderColor:mainColor,borderWidth:1.2,paddingVertical:3,paddingHorizontal:9, borderRadius:4, marginRight: 7 }}>
										<FontAwesome name='heart' color='#5ac8fa' size={18} />
									</View>
									<View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: 'white',borderColor:mainColor,borderWidth:1.2,paddingVertical:3, paddingHorizontal:9, borderRadius:4}}>
										<FontAwesome name='cart-plus' color='#5ac8fa' size={20} />
									</View>
								</View>
							</View>
				</View>
			</View>
		)
	}
}
