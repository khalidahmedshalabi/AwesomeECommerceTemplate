import React from 'react'
import { I18nManager } from 'react-native'
import { createDrawerNavigator } from 'react-navigation';
import { CustomDrawer1ContentComponent, CustomDrawer2ContentComponent } from './CustomDrawerContentComponents'
import Screen_6 from '../containers/Screen_6'
import Screen_7 from '../containers/Screen_7'

import Ionicons from 'react-native-vector-icons/Ionicons'

export const drawerNavigator1 = createDrawerNavigator({
	Home: {
		screen: Screen_6,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Ionicons name='ios-home' color='#afafaf' size={25} tintColor={tintColor} />
			),
		}
	},
	Item1: {
		screen: Screen_6,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Ionicons name='ios-cube' color='#afafaf' size={25} tintColor={tintColor} />
			),
		}
	},
	Item2: {
		screen: Screen_6,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Ionicons name='ios-cube' color='#afafaf' size={25} tintColor={tintColor} />
			),
		}
	},
	Item3: {
		screen: Screen_6,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Ionicons name='ios-cube' color='#afafaf' size={25} tintColor={tintColor} />
			),
		}
	},
	Item4: {
		screen: Screen_6,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Ionicons name='ios-cube' color='#afafaf' size={25} tintColor={tintColor} />
			),
		}
	},
}, 
{
	contentComponent: CustomDrawer1ContentComponent,
	drawerPosition: I18nManager.isRTL ? 'right' : 'left',
	contentOptions: {
		labelStyle: { color: 'black', fontWeight: 'bold' },
		activeTintColor: 'red',
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
				<Ionicons name='ios-home' color='white' size={25} tintColor={tintColor} />
			),
		}
	},
	Item1: {
		screen: Screen_7,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Ionicons name='ios-cube' color='white' size={25} tintColor={tintColor} />
			),
		}
	},
	Item2: {
		screen: Screen_7,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Ionicons name='ios-cube' color='white' size={25} tintColor={tintColor} />
			),
		}
	},
	Item3: {
		screen: Screen_7,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Ionicons name='ios-cube' color='white' size={25} tintColor={tintColor} />
			),
		}
	},
	Item4: {
		screen: Screen_7,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Ionicons name='ios-cube' color='white' size={25} tintColor={tintColor} />
			),
		}
	},
},
	{
		contentComponent: CustomDrawer2ContentComponent,
		drawerPosition: I18nManager.isRTL ? 'right' : 'left',
		contentOptions: {
			labelStyle: { color: 'white', fontWeight: 'bold' },
			activeTintColor: 'red',
			iconContainerStyle: {
				opacity: 1,
				marginRight: 0,
			}
		}
	});