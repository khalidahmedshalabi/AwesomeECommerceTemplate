import React from 'react';
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
} from 'react-native'
import { LinearGradient } from 'expo';
import { DrawerItems } from 'react-navigation';
import { mainColor } from '../constants/Colors'

export const CustomDrawer1ContentComponent = (props) => {
	return (
		<ScrollView style={{ backgroundColor: '#fff', flex: 1, }}>
			<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 16, paddingVertical: 28 }} onPress={() => {}} >
				<View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#c8c8c8', borderColor: mainColor, borderWidth: 1 }}></View>
				<View style={{ flexDirection: 'column', margin: 20}}>
					<Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>John Bartl</Text>
					<Text style={{ fontSize: 16, color: '#969696',  }}>London, UK</Text>
				</View>
			</TouchableOpacity>

			<DrawerItems 
				{...props}
				style={{ paddingLeft: 10}} />
		</ScrollView>
	);
}

export const CustomDrawer2ContentComponent = (props) => {
	return (
		<LinearGradient
			colors={['#19d7fb', '#1e63ee']}
			start={{ x: 0.0, y: 1.0 }}
			end={{ x: 1.0, y: 0.0 }}
			style={{
				width: '100%',
				height: '100%'
			}}>
			<ScrollView style={{ backgroundColor: 'transparent', flex: 1, }}>
				<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 16, paddingVertical: 28 }} onPress={() => { }} >
					<View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#c8c8c8', borderColor: 'white', borderWidth: 1 }}></View>
					<View style={{ flexDirection: 'column', margin: 20, }}>
						<Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>John Bartl</Text>
						<Text style={{ fontSize: 16, color: '#c4f3fc', }}>London, UK</Text>
					</View>
				</TouchableOpacity>

				<DrawerItems
					{...props}
					style={{ paddingLeft: 10 }} />
			</ScrollView>
		</LinearGradient>
	);
}

export default {
	CustomDrawer1ContentComponent,
	CustomDrawer2ContentComponent
}