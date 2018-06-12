import React, { Component } from 'react'
import { Dimensions, View, StatusBar, Platform, FlatList, TouchableOpacity, I18nManager } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Button, Title, Badge, Text } from 'native-base';
import Carousel from 'react-native-carousel-view'
import Stars from 'react-native-stars-rating'
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view"
import IconBadge from 'react-native-icon-badge'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { colorOrange } from '../../constants/Colors'

class CategoryTab extends Component {
	constructor() {
		super()

		this.state = {
			cardImgWidth: width * 0.35483870967741935483870967741935
		}
	}


	render () {
		const { products } = this.props

		return (
			<FlatList
				data={products}
				style={{ flex: 1, paddingVertical: 14 }}
				renderItem={({ item }) => {
					const priceTag = <Text style={{ fontSize: 13, color: colorOrange }}>{item.currentPrice}$</Text>
					const priceContainer = item.oldPrice === 0 ? priceTag : (
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ fontSize: 13, color: '#969696', textDecorationLine: 'line-through', marginRight: 3 }}>{item.oldPrice}$</Text>
							{priceTag}
						</View>
					)

					return (
						<View
							onLayout={(event) => this.setState({ cardImgWidth: event.nativeEvent.layout.width * 0.35483870967741935483870967741935 })}
							style={{ flex: 1, flexDirection: 'row', borderRadius: 1, marginBottom: 8, marginHorizontal: 14, height: this.state.cardImgWidth, }}>
							<View style={{ flex: 0.55, backgroundColor: '#c8c8c8' }}>

							</View>

							<View style={{ flex: 1, backgroundColor: 'white', padding: 7, justifyContent: 'space-between' }}>
								<Text style={{ fontWeight: 'bold' }}>{item.title}</Text>

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
				}} 
			/>
		)
	}
}

export default class Screen extends Component {
	constructor() {
		super()

		this.state = {
			ads: [
				{
					key: '1',
					title1: 'Winter',
					title2: 'Collection',
					startFromLeft: true,
					buttonText: 'DISCOVER MORE',
					bgColor: '#c8c8c8'
				},
				{
					key: '2',
					title1: 'Spring',
					title2: 'Looks',
					startFromLeft: false,
					buttonText: 'DISCOVER MORE',
					bgColor: '#e1e1e1'
				},
				{
					key: '3',
					title1: '2017',
					title2: 'Collection',
					startFromLeft: true,
					buttonText: 'DISCOVER MORE',
					bgColor: '#c8c8c8'
				},
			],
			tabs: [
				{
					key: '1',
					title: 'Top Seller',
					products: [
						{
							key: '1',
							title: 'Product 1',
							stars: 5,
							oldPrice: 0,
							currentPrice: 225,
							description: 'Lorem ipsum dolor sit amet'
						},
						{
							key: '2',
							title: 'Product 2',
							stars: 3,
							oldPrice: 399,
							currentPrice: 299,
							description: 'Lorem ipsum dolor sit amet'
						},
						{
							key: '3',
							title: 'Product 3',
							stars: 4,
							oldPrice: 0,
							currentPrice: 159,
							description: 'Lorem ipsum dolor sit amet'
						},
						{
							key: '4',
							title: 'Product 4',
							stars: 2,
							oldPrice: 0,
							currentPrice: 140,
							description: 'Lorem ipsum dolor sit amet'
						},
					]
				},
				{
					key: '2',
					title: 'New Products',
					products: [
						
					]
				},
				{
					key: '3',
					title: 'Dresses',
					products: [

					]
				},
				{
					key: '4',
					title: 'Accessories',
					products: [

					]
				},
				{
					key: '5',
					title: 'Fifth',
					products: [

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

					<Button style={{ elevation: 0, backgroundColor: colorOrange, marginTop: 16, paddingHorizontal: 14 }}>
						<Text style={{ color: 'white' }}>{item.buttonText}</Text>
					</Button>
				</View>
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
						<TouchableOpacity>
							<FontAwesome name='bars' size={26} color={colorOrange} />
						</TouchableOpacity>
					</Left>
					<Body style={{ flex: 1 }}>
						<Title style={{ color: 'black', alignSelf: 'center' }}>Inge</Title>
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
										<FontAwesome name='shopping-cart' size={26} color={colorOrange} />
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

				<ScrollableTabView
					ref="Tabs"
					onChangeTab={(tab) => {}}
					tabBarUnderlineStyle={{ height: 2, backgroundColor: colorOrange }}
					tabBarActiveTextColor={'black'}
					tabBarInactiveTextColor={"#B8B8B8"}
					tabBarTextStyle={{ height: 20, fontWeight: 'normal', fontSize: 13 }}
					renderTabBar={ () => (
						<ScrollableTabBar
							underlineHeight={3}
							style={{ backgroundColor: 'white', borderBottomWidth: 0 }}
							tabsContainerStyle={{ paddingHorizontal: 14, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}
							tabStyle={{ paddingBottom: 0, borderBottomWidth: 0, paddingTop: 0, }} />
					)}
					initialPage={0}>
					{
						this.state.tabs.map((tab, index) => <CategoryTab key={`${index}`} tabLabel={tab.title} products={tab.products} />)
					}
				</ScrollableTabView>
			</Container>
		)
	}
}