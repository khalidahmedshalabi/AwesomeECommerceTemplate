import React from 'react'
import { I18nManager } from 'react-native'
import { createDrawerNavigator } from 'react-navigation';
import { CustomDrawer1ContentComponent, CustomDrawer2ContentComponent } from './CustomDrawerContentComponents'
import Screen_6 from '../containers/Screen_6'
import Screen_7 from '../containers/Screen_7'

import Screen_11 from '../containers/Screen_11'
import Screen_13 from '../containers/Screen_13'
import Screen_21 from '../containers/Screen_21'
import Screen_25 from '../containers/Screen_25'
import Screen_28 from '../containers/Screen_28'

import { FontAwesome, Ionicons, Entypo, Feather, Octicons } from '@expo/vector-icons'

export const drawerNavigator1 = createDrawerNavigator({
	Home: {
		screen: Screen_6,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Ionicons name='ios-home' color='#afafaf' size={25} tintColor={tintColor} />
			),
		}
	},
	'My Account': {
		screen: Screen_21,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<FontAwesome name='user' color='#afafaf' size={25} tintColor={tintColor} />
			),
		}
	},
	Categories: {
		screen: Screen_11,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Entypo name='grid' color='#afafaf' size={25} tintColor={tintColor} />
			),
		}
	},
	'Products': {
		screen: Screen_13,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Feather name='box' color='#afafaf' size={25} tintColor={tintColor} />
			),
		}
	},
	'Shopping Cart': {
		screen: Screen_28,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<FontAwesome name='shopping-cart' color='#afafaf' size={25} tintColor={tintColor} />
			),
		}
	},
	'Wishlist': {
		screen: Screen_25,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Octicons name='checklist' color='#afafaf' size={25} tintColor={tintColor} />
			),
		}
	},
},
	{
		contentComponent: CustomDrawer1ContentComponent,
		drawerPosition: I18nManager.isRTL ? 'right' : 'left',
		contentOptions: {
			labelStyle: { color: 'black', fontWeight: 'bold' },
			iconContainerStyle: {
				opacity: 1,
				marginRight: 0,
			}
		}
	});


export const drawerNavigator2 = createDrawerNavigator({
	Home: {
		screen: Screen_7,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Ionicons name='ios-home' color= 'white' size={25} tintColor={tintColor} />
			),
		}
	},
	'My Account': {
		screen: Screen_21,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<FontAwesome name='user' color='white' size={25} tintColor={tintColor} />
			),
		}
	},
	Categories: {
		screen: Screen_11,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Entypo name='grid' color='white' size={25} tintColor={tintColor} />
			),
		}
	},
	'Products': {
		screen: Screen_13,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Feather name='box' color='white' size={25} tintColor={tintColor} />
			),
		}
	},
	'Shopping Cart': {
		screen: Screen_28,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<FontAwesome name='shopping-cart' color='white' size={25} tintColor={tintColor} />
			),
		}
	},
	'Wishlist': {
		screen: Screen_25,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Octicons name='checklist' color='white' size={25} tintColor={tintColor} />
			),
		}
	},
},
	{
		contentComponent: CustomDrawer2ContentComponent,
		drawerPosition: I18nManager.isRTL ? 'right' : 'left',
		contentOptions: {
			labelStyle: { color: 'white', fontWeight: 'bold' },
			iconContainerStyle: {
				opacity: 1,
				marginRight: 0,
			}
		}
	});