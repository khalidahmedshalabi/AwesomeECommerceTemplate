import React, { Component } from 'react'
import { Dimensions, StatusBar, Platform, View, FlatList, TouchableOpacity, I18nManager,TextInput } from 'react-native'
import { FontAwesome, Ionicons, Octicons } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Button, Title, Text, Content ,Item} from 'native-base';
import PopupDialog from 'react-native-popup-dialog';
import { buttonBorderRadius, inputBorderRadius, imageBorderRadius } from '../../constants/gStyles';
import Stars from 'react-native-stars-rating'
import IconBadge from 'react-native-icon-badge'
import ColorsList from '../../components/ColorsList';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { mainColor } from '../../constants/Colors'
import CounterCard from '../../components/CounterCard';
const formSpacing = 13

export default class Screen extends Component {
	constructor() {
		super()

		this.state = {
			imgs: [
				{key: '0', uri: '...'},
				{key: '1', uri: '...'},
				{key: '2', uri: '...'},
				{key: '3', uri: '...'},
				{key: '4', uri: '...'},
			],
			colors: [
				{
					key: '1',
					text: '',
					textColor: '',
					bgColor: '#f7b267',
					selected: true,

				},
				{
					key: '2',
					text: '',
					textColor: '',
					bgColor: '#4ecdc4',
					selected: false,
				},
				{
					key: '3',
					text: '',
					textColor: '',
					bgColor: '#9999c3',
					selected: false,
				},
				{
					key: '4',
					text: '',
					textColor: '',
					bgColor: '#c0e6de',
					selected: false,
				},
				{
					key: '5',
					text: '',
					textColor: '',
					bgColor: '#d1495b',
					selected: false,
				},
				{
					key: '6',
					text: 'All',
					textColor: '#afafaf',
					bgColor: '#eeeeee',
					selected: false,
				}
			],
			sizes: [
				{
					key: '1',
					title: 'Available Sizes'
				},
				{
					key: '2',
					title: 'Small'
				},
				{
					key: '3',
					title: 'Medium'
				},
				{
					key: '4',
					title: 'Large'
				},
				{
					key: '5',
					title: 'X Large'
				},
				{
					key: '6',
					title: 'XX Large'
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

	selectItem = (key, type) => {
		let temp = type == 'sizes' ? this.state.sizes : this.state.colors
		temp.map(item => {
			item.key == key ?
				item.selected = true
			:
				item.selected = false
		})
		type == 'sizes' ? this.setState({ sizes: temp }) : this.setState({ colors: temp })
	}

	renderColorItem = (item) => {
		return (
			<TouchableOpacity onPress={() => this.selectItem(item.key, 'colors')} style={{ alignItems: 'center', }}>
				<View
					style={{
						backgroundColor: item.bgColor,
						width: 36,
						height: 36,
						borderRadius: 18,
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					{
						item.text ?
						<Text style={{ color: item.textColor }}>{item.text}</Text>
						: null
					}
				</View>

				{
					item.selected ?
					<View style={{
						width: 12,
						height: 12,
						borderRadius: 6,
						backgroundColor: 'rgba(255, 255, 255, .9)',
						position: 'absolute',
						zIndex: 10,
						top: 12
					 }} >
					</View>
					: null
				}
			</TouchableOpacity>
		)
	}

	renderSize = (item) => {
		return (
			<TouchableOpacity style={{ backgroundColor: mainColor }}>
				<Text style={{ color: 'white', marginVertical: 15, alignSelf: 'center' }}>{item.title}</Text>
			</TouchableOpacity>
		)
	}

	renderImgItem = (item) => (
		<View style={{ width: this.state.smallImageWidth, height: this.state.smallImageWidth, backgroundColor: '#c8c8c8', marginHorizontal: 4 }}>
		</View>
	)

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
						<Title style={{ color: 'black', alignSelf: 'center' ,marginLeft:-20 }}>Products Details</Title>
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

				<Content>
					<View style={{ flex: 1, alignItems: 'center', padding: 14, }}>
						<View
							style={{ width:'100%', marginBottom: formSpacing }}
							onLayout={(event) => this.setState({
								largeImageWidth: event.nativeEvent.layout.width,
								smallImageWidth: event.nativeEvent.layout.width * 0.235
							})}>
							<View style={{ width: this.state.largeImageWidth, height: this.state.largeImageWidth, backgroundColor: '#c8c8c8' }}>
							</View>

							<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: formSpacing }}>
								<FlatList
									horizontal={true}
									style={{ marginTop: formSpacing }}
									data={this.state.imgs}
									renderItem={({ item }) => this.renderImgItem(item)} />
							</View>
						</View>

						<View style={{ width:'100%', backgroundColor: 'white', borderRadius: 1, padding: 14, }}>
							<View>
								<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
									<View style={{ flexDirection: 'row', alignItems: 'center' }}>
										<Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Jacket with Shirt</Text>
										<Text style={{
											marginLeft: 7,
											color: 'white',
											backgroundColor: '#f44242',
											paddingHorizontal: 4,
											paddingVertical: 2,
											fontSize: 12,
										}}>NEW</Text>
									</View>

									<View style={{ flexDirection: 'row', alignItems: 'center' }}>
										<Text style={{ fontSize: 15, color: '#969696', textDecorationLine: 'line-through', marginRight: 3 }}>225$</Text>
										<Text style={{ fontSize: 15, color: mainColor }}>170$</Text>
									</View>
								</View>

								<Stars
									isActive={false}
									rateMax={5}
									isHalfStarEnabled={false}
									onStarPress={(rating) => console.log(rating)}
									rate={5}
									color='#f9e784'
									size={13}
								/>

								<Text style={{ color: '#969696', marginTop: formSpacing, marginBottom: formSpacing, textAlign: 'left' }}>{loremIpsum}</Text>

								<Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginBottom: formSpacing, textAlign: 'left' }}>Features</Text>
								<View
									style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
									<View style={{ justifyContent: 'center' }}>
										<View style={{ flexDirection: 'row' }}>
											<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Availability: </Text>
											<Text style={{ color: '#969696', fontSize: 13,  marginBottom: formSpacing }}>In Stock</Text>
										</View>

										<View style={{ flexDirection: 'row' }}>
											<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Weight: </Text>
											<Text style={{ color: '#969696', fontSize: 13, marginBottom: formSpacing }}>500g</Text>
										</View>
									</View>

									<View style={{ justifyContent: 'center' }}>
										<View style={{ flexDirection: 'row' }}>
											<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Product Code: </Text>
											<Text style={{ color: '#969696', fontSize: 13, marginBottom: formSpacing }}>B01J88GV0C</Text>
										</View>

										<View style={{ flexDirection: 'row' }}>
											<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Free Shipping: </Text>
											<Text style={{ color: '#969696', fontSize: 13, marginBottom: formSpacing }}>Yes</Text>
										</View>
									</View>
								</View>
								<Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', textAlign: 'left' }}>Sizes</Text>
								<TouchableOpacity style={{marginVertical: 15, paddingHorizontal: 10, flexDirection: 'row', backgroundColor: '#eeeeee', justifyContent: 'space-between', alignItems: 'center', borderRadius: inputBorderRadius }}
									onPress={() => {
										this.popupDialog.show();
									}}>
									<Text style={{ fontSize: 15, color: '#afafaf', marginVertical: 10 }}>Available Sizes</Text>
									<Ionicons
										name={'ios-arrow-down'}
										color={'#969696'}
										size={17} />
								</TouchableOpacity>
								<Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginBottom: formSpacing, textAlign: 'left' }}>Colors</Text>
								<ColorsList
									colorsListData={this.state.colors}
								/>
								<Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginBottom: formSpacing, marginTop: formSpacing, textAlign: 'left' }}>Quantity</Text>
								<CounterCard quantity={5}/>
							</View>
						</View>
						<Button
							iconLeft
							full
							style={{ backgroundColor: mainColor, elevation: 0, marginTop: formSpacing ,borderRadius:buttonBorderRadius}}>
							<FontAwesome name='shopping-cart' size={18} color='white' />
							<Text style={{ color: 'white' }}>ADD TO CART</Text>
						</Button>

						<Button
							iconLeft
							full
							style={{ backgroundColor: mainColor, elevation: 0, marginTop: formSpacing ,borderRadius:buttonBorderRadius }}>
							<Octicons name='checklist' size={18} color='white' />
							<Text style={{ color: 'white' }}>TO WISHLIST</Text>
						</Button>
					</View>
				</Content>
				<PopupDialog
					dialogStyle={{ backgroundColor: mainColor, borderRadius: imageBorderRadius, paddingVertical: 11 }}
					width={0.80}
					ref={(popupDialog) => { this.popupDialog = popupDialog; }}
				>
					<FlatList
						data={this.state.sizes}
						ItemSeparatorComponent={
							() => this.state.isGridView ? null
								: <View style={{ backgroundColor: 'white', height: 1 }}></View>
						}
						renderItem={({ item }) => this.renderSize(item)} />
				</PopupDialog>
			</Container>
		)
	}
}

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
