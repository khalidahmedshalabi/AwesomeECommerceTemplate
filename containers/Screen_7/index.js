import React, { Component } from 'react'
import { Dimensions, View, StatusBar, Platform, FlatList, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Button, Title, Text } from 'native-base';
import Carousel from 'react-native-carousel-view'
import Stars from 'react-native-stars-rating'
import IconBadge from 'react-native-icon-badge'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { mainColor } from '../../constants/Colors'
import { buttonBorderRadius, imageBorderRadius } from '../../constants/gStyles';

export default class Screen extends Component {
	constructor() {
		super()

		this.state = {
			ads: [
				{
					key: '1',
					title1: 'Summer',
					title2: 'Season',
					startFromLeft: true,
					buttonText: 'KNOW MORE',
					bgColor: '#c8c8c8'
				},
				{
					key: '2',
					title1: 'Winter',
					title2: 'Season',
					startFromLeft: false,
					buttonText: 'KNOW MORE',
					bgColor: '#e1e1e1'
				},
				{
					key: '3',
					title1: 'Autumn',
					title2: 'Season',
					startFromLeft: true,
					buttonText: 'KNOW MORE',
					bgColor: '#c8c8c8'
				},
			],
			sections: [
				{
					key: '1',
					title: 'Summer Collection',
					products: [
						{
							key: '1',
							title: 'Product 1',
							stars: 5,
							oldPrice: 0,
							currentPrice: 225,
						},
						{
							key: '2',
							title: 'Product 2',
							stars: 3,
							oldPrice: 399,
							currentPrice: 299,
						},
						{
							key: '3',
							title: 'Product 3',
							stars: 4,
							oldPrice: 0,
							currentPrice: 159,
						},
						{
							key: '4',
							title: 'Product 4',
							stars: 2,
							oldPrice: 0,
							currentPrice: 140,
						},
					]
				},
				{
					key: '2',
					title: 'Suggested for you',
					products: [
						{
							key: '1',
							title: 'Product 1',
							stars: 4,
							oldPrice: 0,
							currentPrice: 225,
						},
						{
							key: '2',
							title: 'Product 2',
							stars: 5,
							oldPrice: 399,
							currentPrice: 299,
						},
						{
							key: '3',
							title: 'Product 3',
							stars: 2,
							oldPrice: 0,
							currentPrice: 159,
						},
						{
							key: '4',
							title: 'Product 4',
							stars: 2,
							oldPrice: 0,
							currentPrice: 140,
						},
					]
				}
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

	renderCarouselPage = (item, index) => {
		return (
			<View key={`${index}`} style={{
				flex: 1,
				backgroundColor: item.bgColor,
				height: 227.5,
				justifyContent: 'flex-end',
				alignItems: item.startFromLeft ? 'flex-start' : 'flex-end'
			}}>

				<View 
					style={{ 
						marginBottom: 32, 
						marginLeft: item.startFromLeft ? 30 : 0,
						marginRight: item.startFromLeft ? 0 : 30,
					}}>
					<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 34 }}>{item.title1}</Text>
					<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 34 }}>{item.title2}</Text>

					<Button style={{ elevation: 0, backgroundColor: mainColor, marginTop: 16, paddingHorizontal: 14, borderRadius: buttonBorderRadius }}>
						<Text style={{ color: 'white' }}>{item.buttonText}</Text>
					</Button>
				</View>
			</View>
		)
	}

	renderSectionProduct = (item) => {
		const priceTag = <Text style={{ fontSize: 13, color: mainColor }}>{item.currentPrice}$</Text>
		const priceContainer = item.oldPrice === 0 ? priceTag : (
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ fontSize: 13, color: '#969696', textDecorationLine: 'line-through', marginRight: 3 }}>{item.oldPrice}$</Text>
				{priceTag}
			</View>
		)
		
		return (
			<View style={{backgroundColor: 'white'}}>
				<View style={{ flex: 1, borderRadius: 1, height: 200, width: 170, marginRight: 14, paddingLeft: 15 }}>
					<View style={{ flex: 1, backgroundColor: '#c8c8c8', borderRadius: imageBorderRadius }}>

					</View>
					
					<View style={{ flex: 0.38, backgroundColor: 'white', paddingHorizontal: 7, justifyContent: 'center', }}>
						<Text style={{ fontWeight: 'bold' }}>{item.title}</Text>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
							{priceContainer}
							<Stars
								isActive={false}
								rateMax={5}
								isHalfStarEnabled={false}
								onStarPress={(rating) => console.log(rating)}
								rate={item.stars}
								color='#f9e784'
								size={13}
							/>
						</View>
					</View>
				</View>
			</View>
		)
	}

	renderSection = (section) => {
		return (
			<View style={{ flex: 1 }}>
				<View style={{backgroundColor: 'white'}}>
					<View
						style={{ 
							width: '100%', 
							flexDirection: 'row', 
							justifyContent: 'space-between', 
							alignItems: 'center',
							marginVertical: 12
						}}>
						<Text style={{ fontWeight: 'bold', marginLeft: 15 }}>{section.title}</Text>

						<TouchableOpacity>
							<Text style={{ color: mainColor, marginRight: 15 }} uppercase={false}>More</Text>
						</TouchableOpacity>
					</View>
				</View>

				<FlatList
					data={section.products}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={{ flex: 1 }}
					renderItem={({ item }) => this.renderSectionProduct(item)} />
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
							onPress={() => this.props.navigation.toggleDrawer()}>
							<FontAwesome name='bars' size={26} color={mainColor} />
						</TouchableOpacity>
					</Left>

					<Body style={{ flex: 1 }}>
						<Title style={{ color: 'black', alignSelf: 'center' }}>Awesome</Title>
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
					ListHeaderComponent={
							<Carousel
								width={width}
								height={270}
								delay={2000}
								indicatorAtBottom={true}
								indicatorSize={25}
								indicatorSpace={8}
								indicatorText="•"
								inactiveIndicatorText='•'
								indicatorColor="white" >
								{this.state.ads.map((ad, index) => this.renderCarouselPage(ad, index))}
							</Carousel>
					}
					ItemSeparatorComponent={
						() => <View style={{ height: 14 }}></View>
					}
					data={this.state.sections}
					renderItem={({ item }) => this.renderSection(item)}/>
			</Container>
		)
	}
}