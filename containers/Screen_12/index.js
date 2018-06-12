import React, { Component } from 'react'
import { Dimensions, View, StatusBar, Platform, FlatList, Image, TouchableOpacity, I18nManager } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Button, Title, Text } from 'native-base';
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view"
import { LinearGradient } from 'expo';
import IconBadge from 'react-native-icon-badge'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { mainColor } from '../../constants/Colors'

const CategoryTab = ({ items, innerTitle }) => {
	return (
		<FlatList
			data={items}
			style={{ flex: 1, backgroundColor: 'white', paddingTop: 14, paddingLeft: 22, margin: 14 }}
			ListHeaderComponent={
				<Text style={{ color: 'black', fontWeight: 'bold', marginBottom: 18, textAlign: 'left' }}>{innerTitle}</Text>
			}
			ItemSeparatorComponent={
				() => <View style={{ height: 18, backgroundColor: 'transparent' }}></View>
			}
			renderItem={({ item }) => {
				return (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image 
							source={{uri: item.iconImg }}
							style={{ width: 20, height: 20, marginRight: 22 }} />

						<Text style={{ color: '#B8B8B8' }}>{item.title}</Text>
					</View>
				)
			}} 
		/>
	)
}

export default class Screen extends Component {
	constructor() {
		super()

		this.state = {
			tabs: [
				{
					key: '1',
					title: 'Top Seller',
					innerTitle: 'All Categories',
					items: [
						{
							key: '1',
							title: 'Product 1',
							iconImg: 'https://image.flaticon.com/icons/png/512/244/244590.png',
						},
						{
							key: '2',
							title: 'Product 2',
							iconImg: 'https://image.flaticon.com/icons/png/512/244/244590.png',
						},
						{
							key: '3',
							title: 'Product 3',
							iconImg: 'https://image.flaticon.com/icons/png/512/244/244590.png',
						},
						{
							key: '4',
							title: 'Product 4',
							iconImg: 'https://image.flaticon.com/icons/png/512/244/244590.png',
						},
						{
							key: '5',
							title: 'Product 5',
							iconImg: 'https://image.flaticon.com/icons/png/512/244/244590.png',
						},
						{
							key: '6',
							title: 'Product 6',
							iconImg: 'https://image.flaticon.com/icons/png/512/244/244590.png',
						},
						{
							key: '7',
							title: 'Product 7',
							iconImg: 'https://image.flaticon.com/icons/png/512/244/244590.png',
						},
						{
							key: '8',
							title: 'Product 8',
							iconImg: 'https://image.flaticon.com/icons/png/512/244/244590.png',
						},
						{
							key: '9',
							title: 'Product 9',
							iconImg: 'https://image.flaticon.com/icons/png/512/244/244590.png',
						},
						{
							key: '10',
							title: 'Product 10',
							iconImg: 'https://image.flaticon.com/icons/png/512/244/244590.png',
						},
					]
				},
				{
					key: '2',
					title: 'New Products',
					innerTitle: 'All categories',
					items: [
						
					]
				},
				{
					key: '3',
					title: 'Dresses',
					innerTitle: 'All categories',
					items: [

					]
				},
				{
					key: '4',
					title: 'Accessories',
					innerTitle: 'All categories',
					items: [

					]
				},
				{
					key: '5',
					title: 'Fifth',
					innerTitle: 'All categories',
					items: [

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

	render () {
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

				<LinearGradient
					colors={['#e9bc76', '#f2817b']}
					start={{ x: 0.0, y: 1.0 }}
					end={{ x: 1.0, y: 0.0 }}
					style={{
						flex: 0.5,
						justifyContent: 'flex-end',
						alignItems: 'flex-start',
						paddingBottom: 20,
						paddingLeft: 20
					}}>
					<Text style={{ color: 'white', fontSize: 34, fontWeight: 'bold' }}>50% DISCOUNT</Text>
					<Text style={{ color: 'white', fontSize: 22 }}>Find Out More Offers</Text>
				</LinearGradient>

				<ScrollableTabView
					ref="Tabs"
					onChangeTab={(tab) => {}}
					tabBarUnderlineStyle={{ height: 2, backgroundColor: mainColor }}
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
						this.state.tabs.map((tab, index) => <CategoryTab key={`${index}`} tabLabel={tab.title} innerTitle={tab.innerTitle} items={tab.items} />)
					}
				</ScrollableTabView>
			</Container>
		)
	}
}