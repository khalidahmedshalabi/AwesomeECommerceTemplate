import React, { Component } from 'react'
import { Dimensions, View, StatusBar, Platform, FlatList, TouchableOpacity, I18nManager } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Button, Title, Badge, Text } from 'native-base';
import Carousel from 'react-native-carousel-view'
import Stars from 'react-native-stars-rating'
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view"
import IconBadge from 'react-native-icon-badge'
import { buttonBorderRadius} from '../../constants/gStyles';
import ProductCard from '../../components/ProductCard';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { mainColor } from '../../constants/Colors'

class CategoryTab extends Component {
	constructor() {
		super()

		this.state = {
			cardImgWidth: width * 0.35483870967741935483870967741935
		}
	}

	renderProduct = (item) => {
		return (
			<ProductCard navigation={this.props.navigation}
				title={item.title}
				description={item.description}
				currentPrice={item.currentPrice}
				oldPrice={item.oldPrice}
				stars={item.stars}
				buttonwishlist={true}/>
		)
	}

	render () {
		const { products } = this.props

		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<FlatList
					style={{ flex: 1 }}
					data={products}
					contentContainerStyle={{ paddingVertical: 14 }}
					ItemSeparatorComponent={() => <View style={{ backgroundColor: '#dedede', height: 1 }}></View>}
					renderItem={({ item }) => this.renderProduct(item)} />
			</View>
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
			tabs: [
				{
					key: '1',
					title: 'First',
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
					title: 'Second',
					products: [

					]
				},
				{
					key: '3',
					title: 'Third',
					products: [

					]
				},
				{
					key: '4',
					title: 'Fourth',
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

					<Button style={{ elevation: 0, backgroundColor: mainColor, marginTop: 16, paddingHorizontal: 14, borderRadius: buttonBorderRadius }}>
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
					tabBarUnderlineStyle={{ height: 2, backgroundColor: mainColor }}
					tabBarActiveTextColor={mainColor}
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
