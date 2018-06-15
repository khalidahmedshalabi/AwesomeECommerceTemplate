import React, { Component } from 'react'
import { View, StatusBar, Platform, FlatList, TouchableOpacity, I18nManager } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Title, Text } from 'native-base';
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view"
import { LinearGradient } from 'expo';
import IconBadge from 'react-native-icon-badge'

import { mainColor } from '../../constants/Colors'

const CategoryTab = ({ items }) => {
	return (
		<FlatList
			contentContainerStyle={{paddingHorizontal: 30, paddingVertical: 15}}
			ItemSeparatorComponent={() => <View style={{backgroundColor: 'transparent', height: 20}}></View>}
			style={{backgroundColor: 'white'}}
			data={items}
			renderItem={({ item }) => {
				return (
					<View style={{
						flex: 1, 
						backgroundColor: mainColor, 
						height: 60, 
						borderRadius: 40,
						justifyContent: 'center', 
						alignItems: 'center'
						}}>
						<Text style={{ color: 'white', fontWeight: 'bold' }}>{item.title}</Text>
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
					title: 'Clothes',
					items: [
						{
							key: '1',
							title: 'Jackets',
						},
						{
							key: '2',
							title: 'Coats',
						},
						{
							key: '3',
							title: 'Trousers',
						},
						{
							key: '4',
							title: 'Shorts',
						},
						{
							key: '5',
							title: 'Underwear',
						},
						{
							key: '6',
							title: 'Suits',
						},
						{
							key: '7',
							title: 'Skirts',
						},
						{
							key: '8',
							title: 'Dresses',
						},
						{
							key: '9',
							title: 'Shoes',
						},
						{
							key: '10',
							title: 'Boots',
						},
					]
				},
				{
					key: '2',
					title: 'Electronics',
					items: [
						
					]
				},
				{
					key: '3',
					title: 'Sports',
					items: [

					]
				},
				{
					key: '4',
					title: 'Furniture',
					items: [

					]
				},
				{
					key: '5',
					title: 'Weddings',
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
					colors={['#19d7fb', '#1e63ee']}
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
					onChangeTab={() => { }}
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
						this.state.tabs.map((tab, index) => <CategoryTab key={`${index}`} tabLabel={tab.title} items={tab.items} />)
					}
				</ScrollableTabView>
			</Container>
		)
	}
}