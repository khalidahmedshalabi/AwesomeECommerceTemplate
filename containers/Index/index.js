import React, { Component } from "react";
import { View } from 'react-native'
import { Container, Form, Item, Input, Button, Text } from 'native-base';

export default class Index extends Component {
	static navigationOptions = {
		header: null
	};

	state = {
		screenNumber: 0
	}

	goToScreen = () => {
		const { navigate } = this.props.navigation;

		if (this.state.screenNumber >= 1 && this.state.screenNumber <= 32) {
			navigate(`Screen_${this.state.screenNumber}`, { })
		}
	}

	render() {
		return (
			<Container style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
				<Input
					style={{ backgroundColor: 'white', flex: 1, width: '80%', textAlign: 'center' }}
					onChangeText={(text) => this.setState({ screenNumber: parseInt(text) })}
					placeholder="Screen number (1-32)" />

				<View style={{ flexDirection: 'row', flex: 1 }}>
					<Button 
						block
						large
						success
						onPress={this.goToScreen}
						style={{ marginRight: 6 }}>
						<Text>Go</Text>
					</Button>

					<Button
						block
						large
						info
						onPress={() => alert(screensList)}>
						<Text>Screens list</Text>
					</Button>
				</View>
			</Container>
		);
	}
}

const screensList = `
1	-	Loading
2	-	Splash
3	-	Login
4	-	Register
5	-	Reset Password
6	-	Home v1
7	-	Home v2
8	-	Home v3
9	-	Menu v1
10	-	Menu v2
11	-	Categories v1
12	-	Categories v2
13	-	Product List View
14	-	Product Grid View
15	-	Search
16	-	Products Filter
17	-	Products Details v1
18	-	Products Details v2 Item Details
19	-	Products Details v2 Reviews
20	-	Products Details v2 Related Items
21	-	My Account
22	-	Change Password
23	-	Add Payment Method
24	-	Edit Shipping Address
25	-	Wishlist
26	-	Shopping Cart List
27	-	Add to Shopping Cart
28	-	Shopping Cart
29	-	Checkout Billing and Shipping
30	-	Checkout Shipping Method
31	-	Checkout Payment Method
32	-	Checkout Confirm Order
`
