import React, { Component } from 'react'
import { Dimensions, StatusBar, Platform, View, FlatList, TouchableOpacity, TextInput, I18nManager } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Button, Title, Text, Content, Item } from 'native-base';
import IconBadge from 'react-native-icon-badge'
import PopupDialog from 'react-native-popup-dialog';
import ColorsList from '../../components/ColorsList';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { mainColor } from '../../constants/Colors'
import { inputBorderRadius, buttonBorderRadius, imageBorderRadius } from '../../constants/gStyles';

const formSpacing = 13

export default class Screen extends Component {
	constructor() {
		super()

		this.state = {
			colors: [
				{
					key: '1',
					text: '',
					textColor: '',
					bgColor: '#f44141',
					selected: true,
				},
				{
					key: '2',
					text: '',
					textColor: '',
					bgColor: '#f49741',
					selected: false,
				},
				{
					key: '3',
					text: '',
					textColor: '',
					bgColor: '#4cf441',
					selected: false,
				},
				{
					key: '4',
					text: '',
					textColor: '',
					bgColor: '#41f4b2',
					selected: false,
				},
				{
					key: '5',
					text: '',
					textColor: '',
					bgColor: '#4194f4',
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
					text: 'XS',
					textColor: '#afafaf',
					bgColor: '#eeeeee',
					selected: true,
				},
				{
					key: '2',
					text: 'S',
					textColor: '#afafaf',
					bgColor: '#eeeeee',
					selected: false,
				},
				{
					key: '3',
					text: 'M',
					textColor: '#afafaf',
					bgColor: '#eeeeee',
					selected: false,
				},
				{
					key: '4',
					text: 'L',
					textColor: '#afafaf',
					bgColor: '#eeeeee',
					selected: false,
				},
				{
					key: '5',
					text: 'XL',
					textColor: '#afafaf',
					bgColor: '#eeeeee',
					selected: false,
				},
				{
					key: '6',
					text: 'XXL',
					textColor: '#afafaf',
					bgColor: '#eeeeee',
					selected: false,
				},
				{
					key: '7',
					text: 'All',
					textColor: '#afafaf',
					bgColor: '#eeeeee',
					selected: false,
				}
			],
			categories: [
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

	selectItem = (key) => {
		let temp = this.state.sizes
		temp.map(item => {
			item.key == key ?
				item.selected = true
			:
				item.selected = false
		})
		this.setState({ sizes: temp })
	}
	renderSizeItem = (item) => {
		return (
			<TouchableOpacity onPress={() => this.selectItem(item.key)} style={{ alignItems: 'center', }}>
				<View
					style={{
						backgroundColor: item.selected ? '#fff' : item.bgColor,
						borderWidth: item.selected ? 4 : 0,
						borderColor: item.selected ? mainColor : '#fff',
						width: 40,
						height: 40,
						borderRadius: 20,
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					{
						item.text ?
							<Text style={{ color: item.textColor }}>{item.text}</Text>
							: null
					}
				</View>
			</TouchableOpacity>
		)
	}
	renderCategory = (item) => {
		return (
			<TouchableOpacity style={{ backgroundColor: mainColor }}>
				<Text style={{ color: 'white', marginVertical: 15, alignSelf: 'center' }}>{item.title}</Text>
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

				<Content scrollEnabled={this.state.scrollEnabled}>
					<View style={{ flex: 1, alignItems: 'center', padding: 14 }}>
						<View style={{width:'100%', backgroundColor: 'white', borderRadius: 1, padding: 14}}>
							<View onLayout={(event) => this.setState({ viewWidth: event.nativeEvent.layout.width })}>
								<Text style={{ color: 'black', fontWeight: 'bold', marginBottom: formSpacing, textAlign: 'left' }}>Search Keyword</Text>
								<TextInput
									underlineColorAndroid='transparent'
									style={{ fontSize: 15, backgroundColor: '#eeeeee', marginBottom: formSpacing, paddingLeft: 7, paddingVertical: 10, borderRadius: inputBorderRadius }}
									placeholder='Enter item here...'
									placeholderTextColor='#afafaf' />

								<Text style={{ color: 'black', fontWeight: 'bold', marginBottom: formSpacing, textAlign: 'left' }}>Select Category</Text>

								<TouchableOpacity style={{paddingHorizontal: 10,flexDirection: 'row', backgroundColor: '#eeeeee', justifyContent: 'space-between', alignItems: 'center', marginBottom: formSpacing, borderRadius: inputBorderRadius}}
									onPress={() => {
										this.popupDialog1.show();
									}}>
									<Text style={{ fontSize: 15, color: '#afafaf', marginVertical: 10}}>Jewellery & Accessories</Text>
									<Ionicons
										name={'ios-arrow-down'}
										color={'#969696'}
										size={17}/>
								</TouchableOpacity>

								<Text style={{ color: 'black', fontWeight: 'bold', marginBottom: formSpacing, textAlign: 'left' }}>Price Range</Text>

								<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
									<View style={{ flex: 1, backgroundColor: '#eeeeee', flexDirection: 'row', justifyContent: 'space-between', borderRadius: inputBorderRadius, marginRight: 15}}>
										<TextInput
											underlineColorAndroid='transparent'
											style={{ fontSize: 15, flex: 1, backgroundColor: '#eeeeee', paddingLeft: 7, paddingVertical: 10}}
											keyboardType= 'numeric'
											placeholder='From...'
											placeholderTextColor='#afafaf' />

										<Text style={{flex: 0.2, color: '#afafaf', alignSelf: 'center'}}>$</Text>
									</View>

									<View style={{ flex: 1, backgroundColor: '#eeeeee', flexDirection: 'row', justifyContent: 'space-between', borderRadius: inputBorderRadius, marginLeft: 15}}>
										<TextInput
											underlineColorAndroid='transparent'
											style={{flex: 1, backgroundColor: '#eeeeee', paddingLeft: 7, paddingVertical: 10}}
											keyboardType= 'numeric'
											placeholder='To...'
											placeholderTextColor='#afafaf' />
										<Text style={{ flex: 0.2, color: '#afafaf', alignSelf: 'center'}}>$</Text>
									</View>
								</View>

								<Text style={{ color: 'black', fontWeight: 'bold', marginBottom: formSpacing, marginTop: formSpacing, textAlign: 'left' }}>Colors</Text>

								<ColorsList
									colorsListData={this.state.colors}
								/>

								<Text style={{ color: 'black', fontWeight: 'bold', marginVertical: formSpacing, textAlign: 'left' }}>Sizes</Text>

								<TouchableOpacity style={{paddingHorizontal: 10, flexDirection: 'row', backgroundColor: '#eeeeee', justifyContent: 'space-between', alignItems: 'center', borderRadius: inputBorderRadius }}
									onPress={() => {
										this.popupDialog1.show();
									}}>
									<Text style={{ fontSize: 15, color: '#afafaf', marginVertical: 10 }}>Available Sizes</Text>
									<Ionicons
										name={'ios-arrow-down'}
										color={'#969696'}
										size={17} />
								</TouchableOpacity>
							</View>
						</View>
						<Button
							full
							style={{ backgroundColor: mainColor, elevation: 0, marginTop: formSpacing, borderRadius: buttonBorderRadius }}>
							<Text style={{ color: 'white' }}>Search</Text>
						</Button>
					</View>
				</Content>

				<PopupDialog
					dialogStyle={{ backgroundColor: mainColor, borderRadius: imageBorderRadius, paddingVertical: 11 }}
					width={0.80}
					ref={(popupDialog) => { this.popupDialog1 = popupDialog; }}
				>
					<FlatList
						data={this.state.categories}
						ItemSeparatorComponent={
							() => this.state.isGridView ? null
								: <View style={{ backgroundColor: 'white', height: 1 }}></View>
						}
						renderItem={({ item }) => this.renderCategory(item)} />
				</PopupDialog>

				<PopupDialog
					dialogStyle={{ backgroundColor: mainColor, borderRadius: imageBorderRadius, paddingVertical: 11 }}
					width={0.80}
					ref={(popupDialog) => { this.popupDialog2 = popupDialog; }}
				>
					<FlatList
						data={this.state.categories}
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
