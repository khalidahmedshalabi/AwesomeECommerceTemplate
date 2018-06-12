import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import Stars from 'react-native-stars-rating'
import { mainColor } from '../../constants/Colors';

export default class Reviews extends Component {
	constructor() {
		super()

		this.state = {
			reviews: [
				{
					key: '1',
					title: 'Hannah John',
					subtitle: sample_text,
					stars: 5,
				},
				{
					key: '2',
					title: 'Johnny Muckle',
					subtitle: sample_text,
					stars: 4,
				},
				{
					key: '3',
					title: 'Sarah James',
					subtitle: sample_text,
					stars: 3,
				},
			]
		}
	}

	renderReviewItem = (item) => (
		<View style={{ flex: 1, backgroundColor: 'white', padding: 14, flexDirection: 'row' }}>
			<View style={{ flex: 0.4, alignItems: 'center' }}>
				<View 
					style={{ 
						width: 70, 
						height: 70, 
						borderRadius: 35, 
						backgroundColor: '#c8c8c8', 
						borderColor: mainColor, 
						borderWidth: 1 
					}}></View>
			</View>

			<View style={{ flex: 1.5, paddingHorizontal: 14, flexWrap: 'wrap'  }}>
				<Text style={{ fontWeight: 'bold', marginBottom: 6 }}>{item.title}</Text>

				<Stars
					isActive={false}
					rateMax={5}
					isHalfStarEnabled={false}
					onStarPress={(rating) => console.log(rating)}
					rate={item.stars}
					color='#f9e784'
					size={14}
				/>

				<Text style={{ color: '#969696', textAlign: 'justify', fontSize: 10, marginTop: 6 }}>{item.subtitle}</Text>
			</View>
		</View>
	)

	render () {
		return (
			<FlatList
				style={{ flex: 1 }}
				contentContainerStyle={{ padding: 14 }}
				ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', height: 14 }}></View>}
				data={this.state.reviews}
				renderItem={({ item }) => this.renderReviewItem(item)} />
		)
	}
}

const sample_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'