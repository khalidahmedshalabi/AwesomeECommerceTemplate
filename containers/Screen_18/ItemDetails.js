import React, { Component } from 'react'
import { Dimensions, View, FlatList, TouchableOpacity, Modal, StatusBar,TextInput } from 'react-native'
import { FontAwesome, Ionicons, Octicons } from '@expo/vector-icons';
import { Text, Content, Button, Container, Header, Form, Item, Label, Input, Textarea, } from 'native-base';
import Stars from 'react-native-stars-rating'
import { buttonBorderRadius, inputBorderRadius } from '../../constants/gStyles';
import ModalSelector from 'react-native-modal-selector'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { mainColor } from '../../constants/Colors'
import ColorsList from '../../components/ColorsList';
import CounterCard from '../../components/CounterCard';
const formSpacing = 13
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'

export default class ItemsDetails extends Component {
	constructor() {
		super()

		this.state = {
			ReviewModalVisible: true,
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
			reviews: [
				{
					key: '0',
					username: 'Alex',
					rating: 4,
					comment: 'Outstanding product',
					quantity:1,
				},
				{
					key: '0',
					username: 'Alex',
					rating: 4,
					comment: 'Outstanding product'
				},
				{
					key: '0',
					username: 'Alex',
					rating: 4,
					comment: 'Outstanding product'
				},
				{
					key: '0',
					username: 'Alex',
					rating: 4,
					comment: 'Outstanding product'
				},
				{
					key: '0',
					username: 'Alex',
					rating: 4,
					comment: 'Outstanding product'
				},
			]
		}
	}

	RenderRatingModal = () => (
		<View>
		<Content>
			<Modal
			animationType="slide"
			transparent={false}
			visible={this.state.ReviewModalVisible}
			onRequestClose={() => {
				alert('Modal has been closed.');
			}}>
			<View style={{ }}>

			<View style={{ backgroundColor: mainColor, alignItems: 'center', paddingVertical: 20 }} >
				<Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }} >Write Review</Text>
				<Ionicons onPress={() => {
					this.setState({ ReviewModalVisible: false });
					}} name='ios-close-circle-outline' size={35} color='white' style={{ position: 'absolute', top: 15, left: 20 }} />
			</View>
				<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }} >

				<Stars
					isActive={true}
					rateMax={5}
					isHalfStarEnabled={true}
					onStarPress={(rating) => console.log(rating)}
					rate={0}
					color='#f9e784'
					size={50}
				/>
				<Text style={{ fontStyle: 'italic', fontSize: 13, marginTop: 10 }} >Tab on stars to rate</Text>

				<Form style={{ width :'100%' }} >
					<Item floatingLabel>
					<Label>Review Title</Label>
					<Input />
					</Item>
					<Item floatingLabel>
					<Label>What's good about this item?</Label>
					<Input />
					</Item>
					<Item floatingLabel>
					<Label>What's not good about this item?</Label>
					<Input />
					</Item>
					<Button style={{ width: '80%', marginLeft: '10%', backgroundColor: '#3ED185', marginTop: 30, justifyContent: 'center', alignItems: 'center' }} >
						<Text style={{ textAlign: 'center' }} >submit</Text>
					</Button>
				</Form>

				</View>
			</View>
			</Modal>
		</Content>
		</View>
	)

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
						borderRadius: 12/2,
						backgroundColor: 'rgba(255, 255, 255, .9)',
						position: 'absolute',
						zIndex: 10,
						top: 36/2-12/2
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
						borderColor: item.selected ? mainColor : '#fff',
						width: 40,
						height: 40,
						borderRadius: 40/2,
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

	renderImgItem = (item) => (
		<View style={{ width: this.state.smallImageWidth, height: this.state.smallImageWidth, backgroundColor: '#c8c8c8', marginHorizontal: 4 }}>
		</View>
	)

	renderReviewItem = (item) => (
		<View style={{ marginRight: 15, borderWidth: 1, borderColor: '#BDBDBD', borderRadius: 3, paddingHorizontal: 20, paddingVertical: 10 }} >
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
				<Text style={{ fontSize: 17, fontWeight: '500', }} >{item.username}</Text>
				<Stars
					isActive={false}
					rateMax={5}
					isHalfStarEnabled={true}
					onStarPress={(rating) => console.log(rating)}
					rate={item.rating}
					color='#f9e784'
					size={20}
				/>
			</View>
			<Text style={{  }} >{item.comment}</Text>
		</View>
	)

	render () {
		const data = [
			{ key: 0, label: 'Available Sizes' },
			{ key: 1, label: 'Small' },
			{ key: 2, label: 'Medium' },
			{ key: 3, label: 'Large' },
			{ key: 4, label: 'X Large' },
			{ key: 5, label: 'XX Large' },
		];
		return (
			<Content>
				{this.RenderRatingModal()}
				<View style={{ flex: 1, alignItems: 'center', padding: 14, }}>
					<View style={{ width: '100%', marginBottom: formSpacing, backgroundColor: 'white', padding: 14 }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Jacket with Shirt</Text>
								<Text style={{
									marginLeft: 7,
									color: 'white',
									backgroundColor: '#f7b267',
									paddingHorizontal: 4,
									paddingVertical: 2,
									fontSize: 12
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
					</View>

					<View
						style={{ width: '100%', marginBottom: formSpacing }}
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

					<View style={{ width: '100%', backgroundColor: 'white', borderRadius: 1, padding: 14, }}>
						<View>
							<Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginBottom: formSpacing }}>Details</Text>
							<Text style={{ color: '#969696', marginBottom: formSpacing }}>{loremIpsum}</Text>

							<Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginBottom: formSpacing }}>Features</Text>
							<View
								style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
								<View style={{ justifyContent: 'center' }}>
									<View style={{ flexDirection: 'row' }}>
										<Text style={{ color: 'black', fontSize: 13, marginBottom: formSpacing }}>Availability: </Text>
										<Text style={{ color: '#969696', fontSize: 13, marginBottom: formSpacing }}>In Stock</Text>
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


							<Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginVertical: formSpacing }}>Available Sizes</Text>
							<ModalSelector data={data} initValue="Available Sizes" supportedOrientations={['portrait']} accessible={true}
								scrollViewAccessibilityLabel={'Scrollable options'} cancelButtonAccessibilityLabel={'Cancel Button'}
								cancelText='Cancel' optionTextStyle={{ color: mainColor }} touchableStyle={{ flex: 1 }}
								childrenContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',flex: 1}}
								onChange={(option) => { this.setState({ textInputValue: option.label }) }}>
								<Item style={{ backgroundColor: '#eeeeee', marginBottom: formSpacing, paddingLeft: 7, borderBottomWidth: 0, borderRadius: inputBorderRadius }}>
									<TextInput
										style={{ flex: 1, paddingVertical: 10}}
										underlineColorAndroid='transparent' disabled placeholder='Available Sizes' placeholderTextColor='#afafaf' />
									<Ionicons name={'ios-arrow-down'} color={'#969696'} size={17} style={{ marginRight: 16 }} />
								</Item>
							</ModalSelector>
								<ColorsList
									colorsListData={this.state.colors}
								/>
							<Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginBottom: formSpacing, marginTop: formSpacing }}>Quantity</Text>
							<CounterCard quantity={10}/>
							<TouchableOpacity onPress={() => this.setState({ ReviewModalVisible: true })} style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 18 }} >
								<Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginBottom: formSpacing,  }}>Reviews</Text>
								<Text style={{ color: '#4286f4', fontSize: 15, fontWeight: '100', marginBottom: formSpacing,  }}> <Ionicons name='ios-add-circle-outline' color='#4286f4' size={20} style={{ marginHorizontal: 10 }} /> Write a review</Text>
							</TouchableOpacity>
							<FlatList
								horizontal={true}
								ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', width: 14 }}></View>}
								data={this.state.reviews}
								renderItem={({ item }) => this.renderReviewItem(item)} />
						</View>
					</View>
					<Button
						iconLeft
						full
						style={{ backgroundColor: mainColor, elevation: 0, marginTop: formSpacing,borderRadius:buttonBorderRadius }}>
						<FontAwesome name='shopping-cart' size={18} color='white' />
						<Text style={{ color: 'white' }}>ADD TO CART</Text>
					</Button>

					<Button
						iconLeft
						full
						style={{ backgroundColor: mainColor, elevation: 0, marginTop: formSpacing,borderRadius:buttonBorderRadius }}>
						<Octicons name='checklist' size={18} color='white' />
						<Text style={{ color: 'white' }}>TO WISHLIST</Text>
					</Button>
				</View>
			</Content>
		)
	}
}
