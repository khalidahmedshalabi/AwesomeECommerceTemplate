import React, { Component } from 'react'
import { Dimensions, View, StatusBar, Platform, FlatList, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Button, Title, Text } from 'native-base';
import IconBadge from 'react-native-icon-badge'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { mainColor } from '../../constants/Colors'
import { buttonBorderRadius } from '../../constants/gStyles';

export default class Screen extends Component {
	constructor() {
		super()

		this.state = {
			categories: [
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
				{
					key: '4',
					title1: 'Spring',
					title2: 'Season',
					startFromLeft: false,
					buttonText: 'KNOW MORE',
					bgColor: '#e1e1e1'
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

	renderCategory = (item) => {
		return (
			<View style={{
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
					data={this.state.categories}
					renderItem={({ item }) => this.renderCategory(item)} />
			</Container>
		)
	}
}