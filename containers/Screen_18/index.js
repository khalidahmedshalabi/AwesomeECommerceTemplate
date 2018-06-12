import React, { Component } from 'react'
import { Dimensions, StatusBar, Platform, View, TouchableOpacity, I18nManager } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Button, Title, Text } from 'native-base';
import IconBadge from 'react-native-icon-badge'

import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view"
import ItemDetails from './ItemDetails'
import Reviews from './Reviews'
import RelatedItems from './RelatedItems'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { mainColor } from '../../constants/Colors'

export default class Screen extends Component {
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
						<Title style={{ color: 'black', alignSelf: 'center' }}>Products Filter</Title>
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

				<ScrollableTabView
					ref="Tabs"
					style={{ marginTop: 0.7 }}
					onChangeTab={(tab) => { }}
					tabBarUnderlineStyle={{ backgroundColor: mainColor }}
					tabBarActiveTextColor={'black'}
					tabBarInactiveTextColor={"#B8B8B8"}
					tabBarTextStyle={{ fontWeight: 'normal' }}
					renderTabBar={() => (
						<ScrollableTabBar
							underlineHeight={2}
							style={{ backgroundColor: 'white', borderBottomWidth: 0, justifyContent: 'flex-start', }}
							tabsContainerStyle={{ paddingHorizontal: 14, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}
							tabStyle={{ paddingBottom: 0, borderBottomWidth: 0, paddingTop: 0, }} />
					)}
					initialPage={this.props.initialPage}>
					<ItemDetails tabLabel='Item Details' />
					<Reviews tabLabel='Reviews (3)' />
					<RelatedItems tabLabel='Related Items' />
				</ScrollableTabView>
			</Container>
		)
	}
}