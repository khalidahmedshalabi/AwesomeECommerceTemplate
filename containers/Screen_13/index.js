import React, { Component } from 'react'
import {
	Dimensions,
	View,
	StatusBar,
	Platform,
	FlatList,
	TouchableWithoutFeedback,
	TouchableOpacity,
	I18nManager
} from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Button, Title, Text } from 'native-base';
import Stars from 'react-native-stars-rating'
import Modal from "react-native-modal"
import IconBadge from 'react-native-icon-badge'
import ProductCard from '../../components/ProductCard';
import PopupDialog from 'react-native-popup-dialog';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const isSmallWidth = width <= 380;
import { mainColor } from '../../constants/Colors'
import { buttonBorderRadius, inputBorderRadius, imageBorderRadius,boxBorderRadius } from '../../constants/gStyles';
export default class Screen extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isGridView: this.props.isGridView,
			searchBarShown: this.props.searchBarShown,
			cartClicked: this.props.clickCart,
			OnCartClick:false,
			addedToCart: this.props.addedToCart,
			products: [
				{
					key: '1',
					title: 'Product 1',
					stars: 5,
					oldPrice: 0,
					currentPrice: 225,
					badgeText: 'TREND',
					badgeColor: '#f44242',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '2',
					title: 'Product 2',
					stars: 3,
					oldPrice: 399,
					currentPrice: 299,
					badgeText: 'AD',
					badgeColor: '#41f468',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '3',
					title: 'Product 3',
					stars: 4,
					oldPrice: 0,
					currentPrice: 159,
					badgeText: '',
					badgeColor: '',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '4',
					title: 'Product 4',
					stars: 2,
					oldPrice: 0,
					currentPrice: 140,
					badgeText: '',
					badgeColor: '',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '5',
					title: 'Product 5',
					stars: 4,
					oldPrice: 180,
					currentPrice: 140,
					badgeText: '',
					badgeColor: '',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '6',
					title: 'Product 6',
					stars: 4,
					oldPrice: 280,
					currentPrice: 240,
					badgeText: '',
					badgeColor: '',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
			],
			cart_items: [
				{
					key: '1',
					title: 'Product 1',
					quantity: 1,
					currentPrice: 225,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '2',
					title: 'Product 2',
					quantity: 1,
					currentPrice: 299,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '3',
					title: 'Product 3',
					quantity: 1,
					currentPrice: 159,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '4',
					title: 'Product 4',
					quantity: 1,
					currentPrice: 140,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '5',
					title: 'Product 5',
					quantity: 1,
					currentPrice: 140,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					key: '6',
					title: 'Product 6',
					quantity: 1,
					currentPrice: 240,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
			],
			categories: [
				{
					key: '1',
					title: 'First'
				},
				{
					key: '2',
					title: 'Second'
				},
				{
					key: '3',
					title: 'Third'
				},
				{
					key: '4',
					title: 'Fourth'
				},
				{
					key: '5',
					title: 'Fifth'
				},
				{
					key: '6',
					title: 'Sixth'
				}
			],
			filter: [
				{
					key: '1',
					title: 'First'
				},
				{
					key: '2',
					title: 'Second'
				},
				{
					key: '3',
					title: 'Third'
				},
				{
					key: '4',
					title: 'Fourth'
				},
				{
					key: '5',
					title: 'Fifth'
				},
				{
					key: '6',
					title: 'Sixth'
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

	onCartIconClicked = () => {
		this.setState({ cartClicked: !this.state.cartClicked })
	}

	renderCartItem = (item) => {
		return (
			<View style={{ flex: 1, flexDirection: 'row', borderRadius: 1 }}>
				<View style={{ flex: 0.6, backgroundColor: '#c8c8c8' }}>

				</View>

				<View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 13, paddingVertical: 9, justifyContent: 'center' }}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
						<Text style={{ fontWeight: 'bold' }}>{item.title}</Text>

						<View
							style={{
								backgroundColor: mainColor,
								paddingVertical: 3,
								paddingHorizontal: 4
							}}>
							<Ionicons name='md-close' color='white' size={18} />
						</View>
					</View>

					<Text style={{ color: '#969696', textAlign: 'justify', paddingVertical: 8 }}>{item.description}</Text>

					<View style={{ flexDirection: 'row' }}>
						<Text style={{ fontSize: 13, color: '#969696' }}>{item.quantity} X </Text>
						<Text style={{ fontSize: 13, color: mainColor }}>{item.currentPrice}$</Text>
					</View>
				</View>
			</View>
		)
	}

	renderCartContent = () => {
		if (this.state.OnCartClick) {
			return (
				<View
					style={{
						position: 'absolute',
						backgroundColor: 'white',
						width: width,
						height: height * 0.45,
						marginTop: this.state.headerHeight,
					}}>
					<View style={{ flexDirection: 'row', height: 1, backgroundColor: '#e9e9e9' }}>
						<View style={{ flex: 1.5 }}></View>
						<View style={{ flex: 0.23, backgroundColor: 'white' }}></View>
						<View style={{ flex: 0.04 }}></View>
					</View>

					<FlatList
						data={this.state.cart_items}
						style={{ flex: 1 }}
						contentContainerStyle={{ padding: 14 }}
						ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', height: 14 }}></View>}
						renderItem={({ item }) => this.renderCartItem(item)}
					/>

					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 14 }}>
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Subtotal: </Text>
							<Text style={{ fontSize: 13, color: mainColor }}>999$</Text>
						</View>

						<Button
							style={{ backgroundColor: mainColor, elevation: 0, paddingHorizontal: 14 ,borderRadius:buttonBorderRadius}}>
							<Text style={{ color: 'white' }}>CHECKOUT</Text>
						</Button>
					</View>
				</View>
			)
		}
	}

	onAddToCart = () => {
		this.setState({ addedToCart: true })
	}

	addToCartModal = () => {
		//if(!isSmallWidth) {
			const betweenButton = this.state.cartModalWidth * 0.023
			const halfBetweenButton = betweenButton / 2.9
			const buttonWidth = (this.state.cartModalWidth / 2) - (betweenButton * 3)
			const buttonsContainerWidth = this.state.cartModalWidth - (betweenButton * 3)
		//}

		return (
			<Modal
				hideModalContentWhileAnimating={true}
				backdropColor='rgba(220, 220, 220, 0.6)'
				swipeDirection='down'
				onSwipe={() => this.setState({ addedToCart: false })}
				onBackdropPress={() => this.setState({ addedToCart: false })}
				onRequestClose={() => this.setState({ addedToCart: false })}
				isVisible={true}>
				<View
					onLayout={(event) => this.setState({ cartModalWidth: event.nativeEvent.layout.width })}
					style={{
						backgroundColor: 'white',
						alignItems: 'center',
						justifyContent: 'center',
						padding: betweenButton,
					}}>
					<Text style={{ marginBottom: 16, textAlign: 'center' }}>
						<Text style={{ color: '#969696' }}>The item </Text>
						<Text style={{ color: 'black', fontWeight: 'bold' }}>Product X </Text>
						<Text style={{ color: '#969696' }}>was successfully added to your cart</Text>
					</Text>

					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: buttonsContainerWidth,borderRadius:boxBorderRadius }}>
						<TouchableOpacity
							style={{
								width: buttonWidth,
								backgroundColor: mainColor,
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: buttonBorderRadius,
								paddingHorizontal: halfBetweenButton,
								paddingVertical: 9,
								elevation: 0,

								//marginRight: isSmallWidth ? 0 : 7,
								//marginBottom: isSmallWidth ? 10 : 0
							}}>
							<Text style={{ color: 'white', textAlign: 'center' }}>Continue shopping</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={{
								width: buttonWidth,
								backgroundColor: mainColor,
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: buttonBorderRadius,
								paddingHorizontal: halfBetweenButton,
								paddingVertical: 9,
								elevation: 0,
								//marginLeft: isSmallWidth ? 0 : 7,
							}}>
							<Text style={{ color: 'white', textAlign: 'center'  }}>Shopping Cart</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		)
	}

	renderProduct = (item) => {
		if(this.state.isGridView) {
			const priceTag = <Text style={{ fontSize: 13, color: mainColor }}>{item.currentPrice}$</Text>
			const priceContainer = item.oldPrice === 0 ? priceTag : (
				<View style={{ flexDirection: 'row' }}>
					<Text style={{ fontSize: 13, color: '#969696', textDecorationLine: 'line-through', marginRight: 3 }}>{item.oldPrice}$</Text>
					{priceTag}
				</View>
			)

			return (
				<View style={{ flex: 1, height: 300, borderRadius: 1, marginHorizontal: 5 }}>
					<View style={{ height: '58%', backgroundColor: '#c8c8c8' }}>
					</View>
					<View style={{ height: '42%', backgroundColor: 'white', paddingHorizontal: 7, justifyContent: 'center', }}>
						<Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
							{priceContainer}
							<Stars
								isActive={false}
								rateMax={5}
								isHalfStarEnabled={false}
								onStarPress={(rating) => console.log(rating)}
								rate={item.stars}
								color='#f9e784'
								size={13}
							/>
						</View>
						<Text style={{ color: '#969696', textAlign: 'justify', fontSize: 10, marginVertical: 0 }}>{item.description}</Text>
						<View style={{ flexDirection: 'row', marginTop: 8 }}>
						<View style={{ backgroundColor: 'white',borderColor:mainColor,borderWidth:1.2,paddingVertical:3,paddingHorizontal:9, borderRadius:4, marginRight: 7 }}>
							<FontAwesome name='heart' color='#5ac8fa' size={18} />
						</View>
							<TouchableOpacity
								onPress={this.onAddToCart}
								style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: 'white',borderColor:mainColor,borderWidth:1.2,paddingVertical:3, paddingHorizontal:9, borderRadius:4}}>
								<FontAwesome name='cart-plus' color='#5ac8fa' size={20} />
							</TouchableOpacity>
						</View>
					</View>
					{
						(item.badgeColor && item.badgeText && item.badgeBorderRadius) ?
						<View style={{
							backgroundColor: item.badgeColor,
							padding: 4,
							position: 'absolute',
							marginTop: 9,
							marginLeft: 9
							}}>
							<Text style={{
								color: 'white',
								fontSize: 12,
							}}>{item.badgeText}</Text>
						</View> : null
					}
				</View>
			)
		}
		else {
			return (
				<ProductCard navigation={this.props.navigation}
					title={item.title}
					description={item.description}
					currentPrice={item.currentPrice}
					oldPrice={item.oldPrice}
					stars={item.stars}
					badgeText={item.badgeText}
					badgeColor={item.badgeColor}
					buttonwishlist={true}/>
			)
		}
	}

	renderSearchBar = () => {
		if(!this.state.searchBarShown) return null

		return [
			<TouchableWithoutFeedback
				key='1'
				onPress={() => this.setState({ searchBarShown: false })}>
				<View
					style={{ position: 'absolute', backgroundColor: 'rgba(220, 220, 220, 0.6)', width: width, height: '100%' }}>
				</View>
			</TouchableWithoutFeedback>
			,
			<View
				key='2'
				style={{
					position: 'absolute',
					backgroundColor: 'white',
					width: width,
					borderTopWidth: 1,
					borderTopColor: '#e1e1e1',
					padding: 10
				}}>
				<View style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: 9,
					backgroundColor: '#eeeeee',
					borderRadius: 3
					}}>
					<Text style={{ color: '#afafaf', fontSize: 13 }}>Search...</Text>
					<FontAwesome
						name={'search'}
						color={'#afafaf'}
						size={15} />
				</View>
			</View>
		]
	}

	renderCategory = (item) => {
		return (
			<TouchableOpacity style={{backgroundColor: mainColor}}>
					<Text style={{ color: 'white', marginVertical: 15, alignSelf: 'center' }}>{item.title}</Text>
			</TouchableOpacity>
		)
	}

	renderFilter = (item) => {
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
					onLayout={(event) => this.setState({ headerHeight: event.nativeEvent.layout.height })}
					noShadow={true}
					androidStatusBarColor='white'
					iosBarStyle='dark-content'
					style={{ backgroundColor: 'white', borderBottomColor: '#e9e9e9', borderBottomWidth: this.state.cartClicked ? 0 : 1 }}>
					<Left style={{ flex: 1 }}>
						<TouchableOpacity style={{ flexDirection: 'row' }}>
							<Ionicons style={{ marginRight: 8 }} name={I18nManager.isRTL ? 'ios-arrow-forward' : 'ios-arrow-back'} size={23} color={mainColor} />
							<Text style={{ color: mainColor }} uppercase={false}>Back</Text>
						</TouchableOpacity>
					</Left>
					<Body style={{ flex: 1 }}>
						<Title style={{ color: 'black', alignSelf: 'center' }}>Awesome</Title>
					</Body>
					<Right style={{ flex: 1 }}>
						<TouchableOpacity
						onPress={() => {
                   this.setState({OnCartClick:!this.state.OnCartClick})}}>
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

				<View
					style={{
						flexDirection: 'row', backgroundColor: 'white', elevation: 0}}>
					<View style={{flex: 0.60}}>
						<TouchableOpacity
							style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 1 }}
							onPress={() => {
								this.popupDialog.show();
							}}>
							<Text style={{ color: '#969696', fontSize: 16}}>Categories</Text>
							<Ionicons
								name={'ios-arrow-down'}
								color={'#969696'}
								size={17} />
						</TouchableOpacity>
					</View>

					<View style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						borderLeftWidth: 1,
						borderLeftColor: '#e1e1e1',
						flex: 1
						}}>
						<Button
							style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
							onPress={() => this.setState({ isGridView: !this.state.isGridView })}
							transparent>
							<FontAwesome
								name={this.state.isGridView ? 'th-large' : 'th-list' }
								color={'#969696'}
								size={21} />
						</Button>

						<Button
							style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'transparent'}}
							onPress={() => {
								this.popupDialog.show();
							}}>
							<FontAwesome
								name={'filter'}
								color={'#969696'}
								size={21} />
						</Button>

						<Button
							style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
							onPress={() => {this.setState({ searchBarShown: !this.state.searchBarShown })}}
							transparent>
							<FontAwesome
								name={'search'}
								color={this.state.searchBarShown ? 'black' : '#969696'}
								size={21} />
						</Button>
					</View>
				</View>
				<View style={{ backgroundColor: '#dedede', height: 1 }}></View>

				<View style={{flex: 1}}>
					<FlatList
						key={this.state.isGridView ? 0 : 1}
						numColumns={this.state.isGridView ? 2 : 1}
						data={this.state.products}
						style={{ flex: 1, backgroundColor: 'white' }}
						ItemSeparatorComponent={
							() => this.state.isGridView ? null
								: <View style={{ backgroundColor: '#dedede', height: 1 }}></View>
						}
						renderItem={({ item }) => this.renderProduct(item)}
					/>

					{this.renderSearchBar()}
				</View>

				{this.renderCartContent()}
				{this.state.addedToCart ? this.addToCartModal() : null}
				<PopupDialog
					dialogStyle={{backgroundColor: mainColor, borderRadius: imageBorderRadius, paddingVertical: 11}}
					width={0.80}
					ref={(popupDialog) => { this.popupDialog = popupDialog; }}
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
					dialogStyle={{backgroundColor: mainColor, borderRadius: imageBorderRadius, paddingVertical: 11 }}
					width={0.80}
					ref={(popupDialog) => { this.popupDialog = popupDialog; }}
				>
					<FlatList
						data={this.state.categories}
						ItemSeparatorComponent={
							() => this.state.isGridView ? null
								: <View style={{ backgroundColor: 'white', height: 1 }}></View>
						}
						renderItem={({ item }) => this.renderFilter(item)} />
				</PopupDialog>
			</Container>
		)
	}
}
