import React, { Component } from 'react'
import { Dimensions, View, StatusBar, Platform, TouchableOpacity, TouchableHighlight, Modal, TextInput, I18nManager } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Container, Body, Left, Right, Header, Button, Title, Badge, Text, Input, Label, Item, Form, Content, Radio, ListItem, Picker,  } from 'native-base';
import { mainColor } from '../../constants/Colors'
import { buttonBorderRadius, inputBorderRadius } from '../../constants/gStyles';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Screen extends Component {
	constructor() {
		super()

		this.state = {
			chnagePasswordModalVisible: false,
			addPaymentModalVisible: false,
			editShippingModalVisible: false,
			paypal: false,
			paypalDisabled: true,
			creditCard: true,
			creditCardDisabled: false,
			Digits_1: '',
			Digits_2: '',
			Digits_3: '',
			Digits_4: '',
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

	onValueChange(value) {
		this.setState({
		  selected: value
		});
	  }

	changePasswordModal = () => (
		<Modal
          animationType="fade"
          transparent={false}
          visible={this.state.chnagePasswordModalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <Container style={{ height, marginTop: 55, backgroundColor: 'rgba(210, 210, 210, .75)'}}>
            <Content>
			<Form style={{ width: width - 40, backgroundColor: '#fff', marginHorizontal: 20, marginTop: '40%', paddingHorizontal: 10, paddingRight: 20, paddingVertical: 15 }} >
				<Item style={{ borderBottomWidth: 0 }} >
					<Text style={{ fontSize: 15, fontWeight: '400', marginBottom: 15, color: '#505050' }} uppercase={true}>change password</Text>
				</Item>
				<Item fixedLabel style={{ backgroundColor: '#eeeeee', alignItems:'flex-start',paddingTop:7, marginVertical: 5, borderBottomWidth: 0  }}>
				<TextInput placeholderTextColor='#afafaf' placeholder='Old Password' style={{fontSize: 15, backgroundColor: '#eeeeee', width: '100%', paddingLeft: 8, marginBottom: width * 0.03, borderRadius: inputBorderRadius}} />
				</Item>
				<Item fixedLabel style={{ backgroundColor: '#eeeeee', alignItems:'flex-start',paddingTop:7, marginVertical: 5, borderBottomWidth: 0  }}>
				<TextInput placeholderTextColor='#afafaf' placeholder='New Password' style={{fontSize: 15, backgroundColor: '#eeeeee', width: '100%', paddingLeft: 8, marginBottom: width * 0.03, borderRadius: inputBorderRadius}} />
				</Item>
				<Item fixedLabel style={{ backgroundColor: '#eeeeee', alignItems:'flex-start',paddingTop:7, marginVertical: 5, borderBottomWidth: 0  }}>
				<TextInput placeholderTextColor='#afafaf' placeholder='Password Confirmation' style={{fontSize: 15, backgroundColor: '#eeeeee', width: '100%', paddingLeft: 8, marginBottom: width * 0.03, borderRadius: inputBorderRadius}} />
				</Item>
				<Item style={{ marginTop: 10, borderBottomWidth: 0 }} >
				<Button style={{ flex: 1, justifyContent: 'center', marginRight: 7, backgroundColor: mainColor,borderRadius:buttonBorderRadius }} onPress={() => this.setState({ chnagePasswordModalVisible: false }) } >
					<Text style={{ fontWeight: 'bold' }} >Change</Text>
				</Button>
				<Button style={{ flex: 1, justifyContent: 'center', marginLeft: 7, backgroundColor:mainColor,borderRadius:buttonBorderRadius}} onPress={() => this.setState({ chnagePasswordModalVisible: false }) } >
					<Text style={{ fontWeight: 'bold' }} >Cancel</Text>
				</Button>
				</Item>
			</Form>
            </Content>
          </Container>
        </Modal>
	)

	selectPayment = method => {
		// 0 means Credit Card or Debit Card
		// 1 means paypal
		switch(method) {
			case 0:
				this.setState({ paypal: false, creditCard: true, paypalDisabled: true, creditCardDisabled: false })
			break;
			case 1:
				this.setState({ paypal: true, creditCard: false, paypalDisabled: false, creditCardDisabled: true })
			break;
		}
	}

	addPaymentModal = () => (
		<Modal
          animationType="fade"
          transparent={false}
          visible={this.state.addPaymentModalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <Container style={{ height, marginTop: 55, backgroundColor: 'rgba(210, 210, 210, .75)'}}>
            <Content>
			<Form style={{ width: width - 40, backgroundColor: '#fff', marginHorizontal: 20, marginTop: '10%', paddingHorizontal: 10, paddingRight: 20, paddingVertical: 15 }} >
				<Item style={{ borderBottomWidth: 0 }} >
					<Text style={{ fontSize: 15, fontWeight: '400', marginBottom: 15, color: '#505050' }} uppercase={true}>add payment method</Text>
				</Item>
					<ListItem style={{ borderBottomWidth: 0 }}>
						<TouchableHighlight onPress={() => this.selectPayment(0)}>
							<Left>
								<Radio
									color={"#eeeeee"}
									selectedColor={"#afafaf"}
									selected={this.state.creditCard}
									onPress={() => this.selectPayment(0)}
								/>
								<Text style={{ marginHorizontal: 10, fontSize: 13 }} >Credit Card or Debit Card</Text>
							</Left>
						</TouchableHighlight>
					</ListItem>
					<Text style={{ fontSize: 13, marginLeft: 20 }} >Card Number</Text>
					<View style={{ flexDirection: 'row' }} >
						<Item onPress={() => this._firstDigits.focus()} style={{ flex: 1, backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
							<TextInput underlineColorAndroid='transparent' keyboardType="numeric" style={{ backgroundColor: 'red' }} maxLength={4} onChangeText={txt => {
								this.setState({ Digits_1: txt.toString() })
								if(txt.length >= 4)
									this._secDigits.focus()
							}} ref={(c) => this._firstDigits = c} disabled={this.state.creditCardDisabled} placeholderTextColor='#afafaf' style={{ fontSize: 15, }} placeholder='' />
						</Item>
						<Item onPress={() => this._secDigits.focus()} style={{ flex: 1, backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
							<TextInput underlineColorAndroid='transparent' keyboardType="numeric" maxLength={4} onChangeText={txt => {
								this.setState({ Digits_2: txt.toString() })
								if(txt.length >= 4)
									this._thirdDigits.focus()
								if(txt.length == 0)
									this._firstDigits.focus()
							}} ref={(c) => this._secDigits = c} onSubmitEditing={() => { this.firstDigitsInput.focus() }} disabled={this.state.creditCardDisabled} placeholderTextColor='#afafaf' style={{ fontSize: 15, }} placeholder='' />
						</Item>
						<Item onPress={() => this._thirdDigits.focus()} style={{ flex: 1, backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
							<TextInput underlineColorAndroid='transparent' keyboardType="numeric" maxLength={4} onChangeText={txt => {
								this.setState({ Digits_3: txt.toString() })
								if(txt.length >= 4)
									this._fourthDigits.focus()
								if(txt.length == 0)
								this._secDigits.focus()
							}} ref={(c) => this._thirdDigits = c} disabled={this.state.creditCardDisabled} placeholderTextColor='#afafaf' style={{ fontSize: 15, }} placeholder='' />
						</Item>
						<Item onPress={() => this._fourthDigits.focus()} style={{ flex: 1, backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
							<TextInput underlineColorAndroid='transparent' keyboardType="numeric" maxLength={4} onChangeText={txt => {
								this.setState({ Digits_4: txt.toString() })
								if(txt.length == 0)
									this._thirdDigits.focus()
								}} ref={(c) => this._fourthDigits = c} disabled={this.state.creditCardDisabled} placeholderTextColor='#afafaf' style={{ fontSize: 15, }} placeholder='' />
						</Item>
					</View>
					<Item style={{ flexDirection: 'row', borderBottomWidth: 0  }} >
						<View style={{ flex: 1, marginVertical: 5, paddingRight: 50,}} >
							<Text style={{ fontSize: 13 }} >Security Code</Text>
							<View style={{ backgroundColor: '#eeeeee', marginVertical: 5,  }}>
								<Input keyboardType="numeric" maxLength={4} disabled={this.state.creditCardDisabled} placeholderTextColor='#afafaf' style={{ fontSize: 15, textAlign: 'center' }} placeholder='' />
							</View>
						</View>
						<View style={{ flex: 1.5, marginVertical: 5, paddingRight: 50,}} >
							<Text style={{ fontSize: 13 }} >Expiration</Text>
							<View style={{ flexDirection: 'row' }} >
								<Input keyboardType="numeric" maxLength={2} disabled={this.state.creditCardDisabled} placeholderTextColor='#afafaf' style={{ fontSize: 13, textAlign: 'center', marginRight: 20, backgroundColor: '#eeeeee', marginVertical: 5, }} placeholder='MM' />
								<Input keyboardType="numeric" maxLength={2} disabled={this.state.creditCardDisabled} placeholderTextColor='#afafaf' style={{ fontSize: 13, textAlign: 'center', backgroundColor: '#eeeeee', marginVertical: 5, }} placeholder='YY' />
							</View>
						</View>
					</Item>

					<ListItem style={{ borderBottomWidth: 0 }}>
					<TouchableHighlight onPress={() => this.selectPayment(1)}>
						<Left>
							<Radio
							color={"#eeeeee"}
							selectedColor={"#afafaf"}
							selected={this.state.paypal}
							onPress={() => this.selectPayment(1)}
							/>
							<Text style={{ marginHorizontal: 10, fontSize: 13 }}>Paypal</Text>
						</Left>
					</TouchableHighlight>
					</ListItem>
					<Item fixedLabel style={{ backgroundColor: '#eeeeee', alignItems:'flex-start',paddingTop:7,marginVertical: 5, borderBottomWidth: 0  }}>
					<TextInput placeholderTextColor='#afafaf' placeholder='Your Account' style={{fontSize: 15, backgroundColor: '#eeeeee', width: '100%', paddingLeft: 8, marginBottom: width * 0.03, borderRadius: inputBorderRadius}} disabled={this.state.paypalDisabled} />
					</Item>
				<Item style={{ marginTop: 10, borderBottomWidth: 0 }} >
				<Button style={{ flex: 1, justifyContent: 'center', marginRight: 7, backgroundColor: mainColor,borderRadius:buttonBorderRadius }} onPress={() => this.setState({ addPaymentModalVisible: false }) } >
					<Text style={{ fontWeight: 'bold' }} >Change</Text>
				</Button>
				<Button style={{ flex: 1, justifyContent: 'center', marginLeft: 7, backgroundColor: mainColor,borderRadius:buttonBorderRadius }} onPress={() => this.setState({ addPaymentModalVisible: false }) } >
					<Text style={{ fontWeight: 'bold' }} >Cancel</Text>
				</Button>
				</Item>
			</Form>
            </Content>
          </Container>
        </Modal>
	)

	editShippingModal = () => (
		<Modal
          animationType="fade"
          transparent={false}
          visible={this.state.editShippingModalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <Container style={{ height, marginTop: 55, backgroundColor: 'rgba(210, 210, 210, .75)'}}>
            <Content>
			<Form style={{ width: width - 40, backgroundColor: '#fff', marginHorizontal: 20, marginTop: '5%', paddingHorizontal: 10, paddingRight: 20, paddingVertical: 15 }} >
				<Item style={{ borderBottomWidth: 0 }} >
					<Text style={{ fontSize: 15, fontWeight: '400', marginBottom: 15, color: '#505050' }} uppercase={true}>edit shipping address</Text>
				</Item>
				<Item fixedLabel style={{ backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
				<TextInput underlineColorAndroid='transparent' returnKeyType='next' ref={c => this.modal_firstName = c } onSubmitEditing={() => this.modal_lastName.focus()} placeholderTextColor='#afafaf' style={{ fontSize: 15, width: '100%' }} placeholder='First Name' />
				</Item>
				<Item fixedLabel style={{ backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
				<TextInput underlineColorAndroid='transparent' returnKeyType='next' ref={c => this.modal_lastName = c } onSubmitEditing={() => this.modal_phoneNumber.focus()} placeholderTextColor='#afafaf' style={{ fontSize: 15, width: '100%' }} placeholder='Last Name' />
				</Item>
				<Item fixedLabel style={{ backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
				<TextInput underlineColorAndroid='transparent' returnKeyType='next' ref={c => this.modal_phoneNumber = c } onSubmitEditing={() => this.modal_email.focus()} placeholderTextColor='#afafaf' style={{ fontSize: 15, width: '100%' }} placeholder='Phone Number' />
				</Item>
				<Item fixedLabel style={{ backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
				<TextInput underlineColorAndroid='transparent' returnKeyType='next' ref={c => this.modal_email = c } onSubmitEditing={() => this.modal_address.focus()} placeholderTextColor='#afafaf' style={{ fontSize: 15, width: '100%' }} placeholder='Email' />
				</Item>
				<Item fixedLabel style={{ backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
				<TextInput underlineColorAndroid='transparent' returnKeyType='next' ref={c => this.modal_address = c } onSubmitEditing={() => this.modal_city.focus()} placeholderTextColor='#afafaf' style={{ fontSize: 15, width: '100%' }} placeholder='Address' />
				</Item>
				<Item fixedLabel style={{ backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
				<TextInput underlineColorAndroid='transparent' returnKeyType='next' ref={c => this.modal_city = c } onSubmitEditing={() => this.modal_zipCode.focus()} placeholderTextColor='#afafaf' style={{ fontSize: 15, width: '100%' }} placeholder='City' />
				</Item>
				<Item fixedLabel style={{ backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
				<TextInput underlineColorAndroid='transparent' returnKeyType='next' ref={c => this.modal_zipCode = c } onSubmitEditing={() => this.modal_state.focus()} placeholderTextColor='#afafaf' style={{ fontSize: 15, width: '100%' }} placeholder='Zip Code' />
				</Item>
				<Item fixedLabel style={{ backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
				<TextInput underlineColorAndroid='transparent' returnKeyType='done' ref={c => this.modal_state = c } onSubmitEditing={() => { }} placeholderTextColor='#afafaf' style={{ fontSize: 15, width: '100%' }} placeholder='State' />
				</Item>
				<Item fixedLabel style={{ backgroundColor: '#eeeeee', paddingHorizontal: 10, marginVertical: 5, borderBottomWidth: 0  }}>
				<Picker
				ref={c => this.modal_country = c }
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Ionicons name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Egypt" value="key0" />
              <Picker.Item label="Engalnd" value="key1" />
              <Picker.Item label="France" value="key2" />
              <Picker.Item label="Spain" value="key3" />
              <Picker.Item label="Russia" value="key4" />
            </Picker>
				</Item>
				<Item style={{ marginTop: 10, borderBottomWidth: 0 }} >
				<Button style={{ flex: 1, justifyContent: 'center', marginRight: 7,borderRadius:buttonBorderRadius, backgroundColor: mainColor }} onPress={() => this.setState({ editShippingModalVisible: false }) } >
					<Text style={{ fontWeight: 'bold' }} >Save</Text>
				</Button>
				<Button style={{ flex: 1, justifyContent: 'center', marginLeft: 7,borderRadius:buttonBorderRadius, backgroundColor: mainColor }} onPress={() => this.setState({ editShippingModalVisible: false }) } >
					<Text style={{ fontWeight: 'bold' }} >Cancel</Text>
				</Button>
				</Item>
			</Form>
            </Content>
          </Container>
        </Modal>
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
						<Button
							iconLeft
							style={{ backgroundColor: 'transparent', elevation: 0 }}>
							<Ionicons name={I18nManager.isRTL ? 'ios-arrow-forward' : 'ios-arrow-back'} size={23} color={mainColor} />
							<Text style={{ color: mainColor, fontSize: 16, marginLeft: -10 }} uppercase={false}>Back</Text>
						</Button>
					</Left>
					<Body style={{ flex: 1 }}>
						<Title style={{ color: 'black', alignSelf: 'center', fontWeight: '500' }}>My Account</Title>
					</Body>
					<Right style={{ flex: 1, }}>
						<TouchableOpacity transparent>
							<Text style={{ color: mainColor, fontSize: 16 }} >Save</Text>
						</TouchableOpacity>
					</Right>
				</Header>

				<Content>
					{this.changePasswordModal()}
					{this.addPaymentModal()}
					{this.editShippingModal()}
					<Form style={{ backgroundColor: '#fff', margin: 15, marginBottom: 10, paddingVertical: 20, paddingRight: 10}} >
						<Item style={{ borderBottomWidth: 0 }} >
							<Text style={{ fontSize: 15, fontWeight: '400', marginBottom: 15, color: '#505050' }} uppercase={true}>personal information</Text>
						</Item>
						<Item fixedLabel style={{ backgroundColor: '#eeeeee', alignItems:'flex-start',paddingTop:7,marginVertical: 5, borderBottomWidth: 0  }}>
						<TextInput underlineColorAndroid='transparent' placeholderTextColor='#afafaf' placeholder='First Name' style={{fontSize: 15, backgroundColor: '#eeeeee', width: '100%', paddingLeft: 8, marginBottom: width * 0.03, borderRadius: inputBorderRadius}} />
						</Item>
						<Item fixedLabel style={{ backgroundColor: '#eeeeee', alignItems:'flex-start',paddingTop:7, marginVertical: 5, borderBottomWidth: 0  }}>
						<TextInput underlineColorAndroid='transparent' placeholderTextColor='#afafaf' placeholder='Last Name' style={{fontSize: 15, backgroundColor: '#eeeeee', width: '100%', paddingLeft: 8, marginBottom: width * 0.03, borderRadius: inputBorderRadius}} />
						</Item>
						<Item fixedLabel style={{ backgroundColor: '#eeeeee', alignItems:'flex-start',paddingTop:7, marginVertical: 5, borderBottomWidth: 0  }}>
						<TextInput underlineColorAndroid='transparent' placeholderTextColor='#afafaf' placeholder='Phone Number' style={{fontSize: 15, backgroundColor: '#eeeeee', width: '100%', paddingLeft: 8, marginBottom: width * 0.03, borderRadius: inputBorderRadius}} />
						</Item>
						<Item fixedLabel style={{ backgroundColor: '#eeeeee', alignItems:'flex-start',paddingTop:7, marginVertical: 5, borderBottomWidth: 0  }}>
						<TextInput underlineColorAndroid='transparent' placeholderTextColor='#afafaf' placeholder='Email' style={{fontSize: 15, backgroundColor: '#eeeeee', width: '100%', paddingLeft: 8, marginBottom: width * 0.03, borderRadius: inputBorderRadius}} />
						</Item>
						<Item style={{ marginTop: 10, borderBottomWidth: 0 }} >
						<Button style={{ flex: 1, justifyContent: 'center', backgroundColor: mainColor , borderRadius:buttonBorderRadius,  }} onPress={() => this.setState({ chnagePasswordModalVisible: true }) } >
							<Text style={{ fontWeight: 'bold' }} >Change Password</Text>
						</Button>
						</Item>
					</Form>

					<Form style={{ backgroundColor: '#fff', margin: 15, marginTop: 0, paddingVertical: 20, paddingRight: 10}} >
						<Item style={{ borderBottomWidth: 0 }} >
							<Text style={{ fontSize: 15, fontWeight: '300', marginBottom: 15, color: '#505050' }} uppercase={true}>payment method</Text>
						</Item>
						<Item style={{ borderBottomWidth: 0, }}>
							<View style={{ flex: 1, }} >
								<Text style={{ color: '#969696', }} >Credit Card - <Text style={{ color: 'red' }} >Primary</Text></Text>
							</View>
							<View style={{ flex: 1, }} >
								<Text style={{ textAlign: 'right', color: '#969696' }} >**** **** **** 3781</Text>
							</View>
						</Item>
						<Item style={{ marginTop: 15, borderBottomWidth: 0 }} >
						<Button style={{ flex: 1, justifyContent: 'center', backgroundColor: mainColor , borderRadius:buttonBorderRadius, }} onPress={() => this.setState({ addPaymentModalVisible: true })} >
							<Text style={{ fontWeight: 'bold' }} >Add Payment Method</Text>
						</Button>
						</Item>
					</Form>

					<Form style={{ backgroundColor: '#fff', margin: 15, marginTop: 0, paddingVertical: 20, paddingRight: 10}} >
						<Item style={{ borderBottomWidth: 0 }} >
							<Text style={{ fontSize: 15, fontWeight: '300', marginBottom: 15, color: '#505050' }} uppercase={true}>shipping address</Text>
						</Item>
						<Item style={{ borderBottomWidth: 0, }}>
							<Text style={{ color: '#969696' }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </Text>
						</Item>
						<Item style={{ marginTop: 15, borderBottomWidth: 0 }} >
						<Button style={{ flex: 1, justifyContent: 'center', backgroundColor: mainColor , borderRadius:buttonBorderRadius, }} onPress={() => this.setState({ editShippingModalVisible: true })} >
							<Text style={{ fontWeight: 'bold' }} >Edit Shipping Address</Text>
						</Button>
						</Item>
					</Form>
					</Content>

			</Container>
		)
	}
}
