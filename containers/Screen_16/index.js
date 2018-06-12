import React, { Component } from 'react'
import { Dimensions, StatusBar, Platform, View, FlatList, TouchableOpacity, TextInput, Slider, I18nManager } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Button, Title, Text, Content, Item, CheckBox } from 'native-base';
import IconBadge from 'react-native-icon-badge'
import ModalSelector from 'react-native-modal-selector'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { colorOrange } from '../../constants/Colors'

const formSpacing = 13

export default class Screen extends Component {
	constructor() {
		super()

		this.state = {
			minPrice: 100,
			maxPrice: 499,
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
						alignItems: 'center',
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

	renderSizeItem = (item) => {
		return (
			<TouchableOpacity onPress={() => this.selectItem(item.key, 'sizes')} style={{ alignItems: 'center', }}>
				<View
					style={{
						backgroundColor: item.selected ? '#fff' : item.bgColor,
						borderWidth: item.selected ? 4 : 0,
						borderColor: item.selected ? colorOrange : '#fff',
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

	render () {
		const data = [
			{ key: 0, label: 'Jewellery & Accessories' },
			{ key: 1, label: 'Test item 2' },
			{ key: 2, label: 'Test item 3' },
		];

		return (
			<Container>
				<Header
					noShadow={true}
					androidStatusBarColor='white'
					iosBarStyle='dark-content'
					style={{ backgroundColor: 'white' }}>
					<Left style={{ flex: 1 }}>
						<TouchableOpacity style={{ flexDirection: 'row' }}>
							<Ionicons style={{ marginRight: 8 }} name={I18nManager.isRTL ? 'ios-arrow-forward' : 'ios-arrow-back'} size={23} color={colorOrange} />
							<Text style={{ color: colorOrange }} uppercase={false}>Back</Text>
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

				<Content scrollEnabled={this.state.scrollEnabled}>
					<View style={{ flex: 1, alignItems: 'center', padding: 14, }}>
						<View style={{ width:'100%', backgroundColor: 'white', borderRadius: 1, padding: 14, }}>
							<View onLayout={(event) => this.setState({ viewWidth: event.nativeEvent.layout.width })}>
								<Text style={{ color: 'black', fontWeight: 'bold', marginBottom: formSpacing, textAlign: 'left' }}>Search Keyword</Text>
								<TextInput
									underlineColorAndroid='transparent'
									style={{ backgroundColor: '#eeeeee', marginBottom: formSpacing, paddingLeft: 7, paddingVertical: 10 }}
									placeholder='Enter item here...'
									placeholderTextColor='#afafaf' />

								<Text style={{ color: 'black', fontWeight: 'bold', marginBottom: formSpacing, textAlign: 'left' }}>Select Category</Text>

								<ModalSelector
									data={data}
									initValue="Jewellery & Accessories"
									supportedOrientations={['landscape']}
									accessible={true}
									scrollViewAccessibilityLabel={'Scrollable options'}
									cancelButtonAccessibilityLabel={'Cancel Button'}
									cancelText='Cancel'
									optionTextStyle={{ color: colorOrange }}
									touchableStyle={{ flex: 1 }}
									childrenContainerStyle={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'center',
										flex: 1,
									}}
									onChange={(option) => { this.setState({ textInputValue: option.label }) }}>
									<Item style={{ backgroundColor: '#eeeeee', marginBottom: formSpacing, paddingLeft: 7, borderBottomWidth: 0 }}>
										<TextInput
											style={{ flex: 1, paddingVertical: 10 }}
											underlineColorAndroid='transparent'
											disabled
											placeholder='Jewellery & Accessories'
											placeholderTextColor='#afafaf' />
										<Ionicons
											name={'ios-arrow-down'}
											color={'#969696'}
											size={17}
											style={{ marginRight: 16 }} />
									</Item>
								</ModalSelector>

								<Text style={{ color: 'black', fontWeight: 'bold', marginBottom: formSpacing, textAlign: 'left' }}>Price Range</Text>

								<View style={{ flexDirection: 'row' }}>
									<View style={{ flex: 0.1 }}>
										<Text style={{ color: 'black' }}>Min</Text>
										<Text style={{ color: 'black' }}>Max</Text>
									</View>
									<View style={{ flex: 0.9 }}>
										<Slider
											style={{ width: '100%', marginBottom: formSpacing }}
											minimumTrackTintColor={colorOrange}
											maximumTrackTintColor={'#CCCCCC'}
											thumbTintColor={colorOrange}
											value={this.state.minPrice}
											minimumValue={1}
											maximumValue={1000}
											onSlidingComplete={(value) => this.setState({ minPrice: parseInt(value) })}
										/>

										<Slider
											style={{ width: '100%', marginBottom: formSpacing }}
											minimumTrackTintColor={colorOrange}
											maximumTrackTintColor={'#CCCCCC'}
											thumbTintColor={colorOrange}
											value={this.state.maxPrice}
											minimumValue={1}
											maximumValue={1000}
											onSlidingComplete={(value) => this.setState({ maxPrice: parseInt(value) })}
										/>
									</View>
								</View>

								<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -formSpacing, marginBottom: formSpacing }}>
									<Text 
										style={{ 
											backgroundColor: '#eeeeee',
											borderRadius: 1,
											paddingHorizontal: 15,
											paddingVertical: 12,
											color: '#afafaf',
											textAlign: 'left'
										}}>{this.state.minPrice}$</Text>
									<Text 
										style={{ 
											backgroundColor: '#eeeeee',
											borderRadius: 1,
											paddingHorizontal: 15,
											paddingVertical: 12,
											color: '#afafaf',
											textAlign: 'left'
										}}>{this.state.maxPrice}$</Text>
								</View>
								
								<Text style={{ color: 'black', fontWeight: 'bold', marginBottom: formSpacing, textAlign: 'left' }}>Colors</Text>
								<FlatList
									extraData={this.state}
									horizontal={true}
									ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', width: 14 }}></View>}
									data={this.state.colors}
									renderItem={({ item }) => this.renderColorItem(item)} />

								<Text style={{ color: 'black', fontWeight: 'bold', marginVertical: formSpacing, textAlign: 'left' }}>Sizes</Text>
								<FlatList
									extraData={this.state}
									horizontal={true}
									ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', width: 14 }}></View>}
									data={this.state.sizes}
									renderItem={({ item }) => this.renderSizeItem(item)} />
							</View>
						</View>
						<Button
							full
							style={{ backgroundColor: colorOrange, elevation: 0, marginTop: formSpacing }}>
							<Text style={{ color: 'white' }}>Search</Text>
						</Button>
					</View>
				</Content>
			</Container>
		)
	}
}