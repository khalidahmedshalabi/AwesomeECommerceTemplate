import React, { Component } from "react";
import { Text, Platform, StatusBar, FlatList, Image, TouchableOpacity, Dimensions } from "react-native";
import { Container, Header, Left, Body, Right, Title, Subtitle, View} from 'native-base';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const screens = [
	{
		key: '1',
		title: 'LOADING',
		routeName: 'Screen_1',
		keyword: require('../../assets/images/screenshots/1.jpg'),
	},
	{
		key: '2',
		title: 'SPLASH',
		routeName: 'Screen_2',
		keyword: require('../../assets/images/screenshots/2.jpg'),
	},
	{
		key: '3',
		title: 'LOGIN',
		routeName: 'Screen_3',
		keyword: require('../../assets/images/screenshots/3.jpg'),
	},
	{
		key: '4',
		title: 'REGISTER',
		routeName: 'Screen_4',
		keyword: require('../../assets/images/screenshots/4.jpg'),
	},
	{
		key: '5',
		title: 'RESET PASSWORD',
		routeName: 'Screen_5',
		keyword: require('../../assets/images/screenshots/5.jpg'),
	},
	{
		key: '6',
		title: 'HOME V1',
		routeName: 'Screen_6',
		keyword: require('../../assets/images/screenshots/6.jpg'),
	},
	{
		key: '7',
		title: 'HOME V2',
		routeName: 'Screen_7',
		keyword: require('../../assets/images/screenshots/7.jpg'),
	},
	{
		key: '8',
		title: 'HOME V3',
		routeName: 'Screen_8',
		keyword: require('../../assets/images/screenshots/8.jpg'),
	},
	{
		key: '9',
		title: 'MENU V1',
		routeName: 'Screen_9',
		keyword: require('../../assets/images/screenshots/9.jpg'),
	},
	{
		key: '10',
		title: 'MENU V2',
		routeName: 'Screen_10',
		keyword: require('../../assets/images/screenshots/10.jpg'),
	},
	{
		key: '11',
		title: 'CATEGORIES V1',
		routeName: 'Screen_11',
		keyword: require('../../assets/images/screenshots/11.jpg'),
	},
	{
		key: '12',
		title: 'CATEGORIES V2',
		routeName: 'Screen_12',
		keyword: require('../../assets/images/screenshots/12.jpg'),
	},
	{
		key: '13',
		title: 'PRODUCT LIST VIEW',
		routeName: 'Screen_13',
		keyword: require('../../assets/images/screenshots/13.jpg'),
	},
	{
		key: '14',
		title: 'PRODUCT GRID VIEW',
		routeName: 'Screen_14',
		keyword: require('../../assets/images/screenshots/14.jpg'),
	},
	{
		key: '15',
		title: 'SEARCH',
		routeName: 'Screen_15',
		keyword: require('../../assets/images/screenshots/15.jpg'),
	},
	{
		key: '16',
		title: 'PRODUCTS FILTER',
		routeName: 'Screen_16',
		keyword: require('../../assets/images/screenshots/16.jpg'),
	},
	{
		key: '17',
		title: 'PRODUCT V1',
		routeName: 'Screen_17',
		keyword: require('../../assets/images/screenshots/17.jpg'),
	},
	{
		key: '18',
		title: 'PRODUCT V2 DETAILS',
		routeName: 'Screen_18',
		keyword: require('../../assets/images/screenshots/18.jpg'),
	},
	{
		key: '19',
		title: 'PRODUCT V2 REVIEWS',
		routeName: 'Screen_19',
		keyword: require('../../assets/images/screenshots/19.jpg'),
	},
	{
		key: '20',
		title: 'PRODUCT V2 RELATED',
		routeName: 'Screen_20',
		keyword: require('../../assets/images/screenshots/20.jpg'),
	},
	{
		key: '21',
		title: 'MY ACCOUNT',
		routeName: 'Screen_21',
		keyword: require('../../assets/images/screenshots/21.jpg'),
	},
	{
		key: '22',
		title: 'CHANGE PASSWORD',
		routeName: 'Screen_22',
		keyword: require('../../assets/images/screenshots/22.jpg'),
	},
	{
		key: '23',
		title: 'ADD PAYMENT METHOD',
		routeName: 'Screen_23',
		keyword: require('../../assets/images/screenshots/23.jpg'),
	},
	{
		key: '24',
		title: 'EDIT SHIPPING ADDRESS',
		routeName: 'Screen_24',
		keyword: require('../../assets/images/screenshots/24.jpg'),
	},
	{
		key: '25',
		title: 'WISHLIST',
		routeName: 'Screen_25',
		keyword: require('../../assets/images/screenshots/25.jpg'),
	},
	{
		key: '26',
		title: 'SHOPPING CART LIST',
		routeName: 'Screen_26',
		keyword: require('../../assets/images/screenshots/26.jpg'),
	},
	{
		key: '27',
		title: 'ADD TO SHOPPING CART',
		routeName: 'Screen_27',
		keyword: require('../../assets/images/screenshots/27.jpg'),
	},
	{
		key: '28',
		title: 'SHOPPING CART',
		routeName: 'Screen_28',
		keyword: require('../../assets/images/screenshots/28.jpg'),
	},
	{
		key: '29',
		title: 'CHECKOUT BILLING AND CHECKING',
		routeName: 'Screen_29',
		keyword: require('../../assets/images/screenshots/29.jpg'),
	},
	{
		key: '30',
		title: 'CHECKOUT SHIPPING METHOD',
		routeName: 'Screen_30',
		keyword: require('../../assets/images/screenshots/30.jpg'),
	},
	{
		key: '31',
		title: 'CHECKOUT PAYMENT METHOD',
		routeName: 'Screen_31',
		keyword: require('../../assets/images/screenshots/31.jpg'),
	},
	{
		key: '32',
		title: 'CHECKOUT CONFIRM ORDER',
		routeName: 'Screen_32',
		keyword: require('../../assets/images/screenshots/32.jpg'),
	},


];

export default class Index extends Component {

	componentWillMount() {
        if(Platform.OS == 'android') {
			StatusBar.setTranslucent(true);
			StatusBar.setBackgroundColor('#000');
		}
	}

	componentWillUnmount() {
        if(Platform.OS == 'android')
            StatusBar.setTranslucent(false);
	}

	renderItem = (item) => {
		const { navigate } = this.props.navigation;
		return (
			<TouchableOpacity onPress={() => {
				navigate(item.routeName)
			}}>
				<Image
					style={{
						width: width*0.85,
						height: 250,
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20
					}}
					source={item.keyword}
				/>

				<View style={{borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingVertical: 15}}>
					<Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>{item.title}</Text>
				</View>

				<View style={{backgroundColor: '#333333', height: 20}}></View>
			</TouchableOpacity>
		)
	}

	render() {
		return (
			<Container style={{ backgroundColor: '#333333'}}>
				<Header
					noShadow={true}
					androidStatusBarColor='white'
					iosBarStyle='dark-content'
					style={{ backgroundColor: '#333333' }}>
					<Left style={{flex: 0.1}} />
					<Body style={{flex: 1, alignItems: 'center'}}>
						<Title style={{color: 'white'}}>AWESOME</Title>
						<Subtitle style={{color: 'white'}}>E-COMMERCE</Subtitle>
					</Body>
					<Right style={{flex: 0.1}} />
				</Header>

				<FlatList
					style={{paddingHorizontal: width*0.075, paddingTop: 10}}
					data={screens}
					renderItem={({ item }) => this.renderItem(item)} />
			</Container>
		);
	}
}
