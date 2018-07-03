import React, { Component } from 'react'
import { Dimensions, View, StatusBar, Platform, FlatList, TouchableOpacity, I18nManager } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Button, Title, Text } from 'native-base'
import IconBadge from 'react-native-icon-badge'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { mainColor } from '../../constants/Colors'
import { imageBorderRadius } from '../../constants/gStyles';

export default class Screen extends Component {
	constructor() {
		super()

		this.state = {
			categories: [
				{
					key: '1',
					title: 'Dresses'
				},
				{
					key: '2',
					title: 'Bags'
				},
				{
					key: '3',
					title: 'Hats'
				},
				{
					key: '4',
					title: 'Cardigans'
				},
				{
					key: '5',
					title: 'Jackets'
				},
				{
					key: '6',
					title: 'Bouses'
				},
			]
		}
	}
	
	componentWillMount() {
		StatusBar.setBarStyle('dark-content')
		if (Platform.OS == 'android') {
			StatusBar.setTranslucent(false);
			//StatusBar.setBackgroundColor('transparent');
		}
	}

	/*componentWillUnmount() {
		if (Platform.OS == 'android')
			StatusBar.setTranslucent(false);
	}*/

	renderCategory = (item) => {
		return (
			<View style={{
				flex: 1,
				backgroundColor: '#c8c8c8',
				height: 150,
				justifyContent: 'flex-end',
				alignItems: 'center',
				marginBottom: 14,
				borderRadius: imageBorderRadius,
				paddingBottom: 5,
				marginHorizontal: 10
			}}>
				<Text style={{ color: 'white', fontSize: 27}}>{item.title}</Text>
			</View>
		)
	}

	render () {
		return (
			<Container>
				<Header
					noShadow={true}
					androidStatusBarColor='white'
					iosBarStyle='dark-content'
					style={{ backgroundColor: 'white' }}>
					<Left style={{ flex: 1 }}>
						<TouchableOpacity 
							onPress={() => this.props.navigation.goBack()}
							style={{ flexDirection: 'row' }}>
							<Ionicons style={{ marginRight: 8 }} name={I18nManager.isRTL ? 'ios-arrow-forward' : 'ios-arrow-back'} size={23} color={mainColor} />
							<Text style={{ color: mainColor }} uppercase={false}>Back</Text>
						</TouchableOpacity>
					</Left>
					<Body style={{ flex: 1 }}>
						<Title style={{ color: 'black', alignSelf: 'center' }}>Categories</Title>
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
					contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 15 }}
					numColumns={2}
					data={this.state.categories}
					renderItem={({ item }) => this.renderCategory(item)} />
			</Container>
		)
	}
}