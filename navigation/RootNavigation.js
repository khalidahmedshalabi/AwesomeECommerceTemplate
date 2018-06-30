import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { drawerNavigator1, drawerNavigator2 } from './DrawerNavigators'

import Index from '../containers/Index';
import Screen_1 from '../containers/Screen_1';
import Screen_2 from '../containers/Screen_2';
import Screen_3 from '../containers/Screen_3';
import Screen_4 from '../containers/Screen_4';
import Screen_5 from '../containers/Screen_5';
import Screen_8 from '../containers/Screen_8';
import Screen_11 from '../containers/Screen_11';
import Screen_12 from '../containers/Screen_12';
import Screen_13 from '../containers/Screen_13';
import Screen_16 from '../containers/Screen_16';
import Screen_17 from '../containers/Screen_17';
import Screen_18 from '../containers/Screen_18';
import Screen_21 from '../containers/Screen_21';
import Screen_25 from '../containers/Screen_25';
import Screen_28 from '../containers/Screen_28';
import Screen_29 from '../containers/Screen_29';
import Screen_30 from '../containers/Screen_30';
import Screen_31 from '../containers/Screen_31';
import Screen_32 from '../containers/Screen_32';

export default RootNavigation = createStackNavigator(
	{
		Index: {
			screen: Index,
		},
		Screen_1: {
			screen: Screen_1
		},
		Screen_2: {
			screen: Screen_2
		},
		Screen_3: {
			screen: Screen_3
		},
		Screen_4: {
			screen: Screen_4
		},
		Screen_5: {
			screen: Screen_5
		},
		Screen_6: {
			screen: drawerNavigator1
		},
		Screen_7: {
			screen: drawerNavigator2
		},
		Screen_8: {
			screen: Screen_8
		},
		Screen_9: {
			screen: drawerNavigator1
		},
		Screen_10: {
			screen: drawerNavigator2
		},
		Screen_11: {
			screen: Screen_11
		},
		Screen_12: {
			screen: Screen_12
		},
		Screen_13: {
			screen: props => <Screen_13 {...props} isGridView={false} clickCart={false} searchBarShown={false} addedToCart={false} />
		},
		Screen_14: {
			screen: props => <Screen_13 {...props} isGridView={true} clickCart={false} searchBarShown={false} addedToCart={false} />
		},
		Screen_15: {
			screen: props => <Screen_13 {...props} isGridView={true} clickCart={false} searchBarShown={true} addedToCart={false} />
		},
		Screen_16: {
			screen: Screen_16
		},
		Screen_17: {
			screen: Screen_17
		},
		Screen_18: {
			screen: props => <Screen_18 {...props} initialPage={0} />
		},
		Screen_19: {
			screen: props => <Screen_18 {...props} initialPage={1} />
		},
		Screen_20: {
			screen: props => <Screen_18 {...props} initialPage={2} />
		},
		Screen_21: {
			screen: Screen_21
		},
		Screen_22: {
			screen: Screen_21
		},
		Screen_23: {
			screen: Screen_21
		},
		Screen_24: {
			screen: Screen_21
		},
		Screen_25: {
			screen: Screen_25
		},
		Screen_26: {
			screen: props => <Screen_13 {...props} isGridView={false} clickCart={true} searchBarShown={false} addedToCart={false} />
		},
		Screen_27: {
			screen: props => <Screen_13 {...props} isGridView={true} clickCart={false} searchBarShown={false} addedToCart={true} />
		},
		Screen_28: {
			screen: Screen_28
		},
		Screen_29: {
			screen: Screen_29
		},
		Screen_30: {
			screen: Screen_30
		},
		Screen_31: {
			screen: Screen_31
		},
		Screen_32: {
			screen: Screen_32
		},
	},
	{
		initialRouteName: 'Index',
		navigationOptions: {
			header: null
		}
	}
);
