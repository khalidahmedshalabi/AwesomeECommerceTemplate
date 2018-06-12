import React from 'react';
import {
	ScrollView,
	View,
	Image,
	Text,
	ImageBackground,
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
				<View style={{ flexDirection: 'column', margin: 20, }}>
					<Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Samantha Jones</Text>
					<Text style={{ fontSize: 16, color: '#969696',  }}>Seattle, USA</Text>
				</View>
			</TouchableOpacity>

			<DrawerItems 
				{...props}
				style={{ paddingLeft: 10 }} />
		</ScrollView>
	);
}

export const CustomDrawer2ContentComponent = (props) => {
	return (
		<LinearGradient
			colors={['#e9bc76', '#f2817b']}
			start={{ x: 0.0, y: 1.0 }}
			end={{ x: 1.0, y: 0.0 }}
			style={{
				width: '100%',
				height: '100%',
				justifyContent: 'flex-start',
				alignItems: 'center'
			}}>
			<ScrollView style={{ backgroundColor: 'transparent', flex: 1, }}>
				<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 16, paddingVertical: 28 }} onPress={() => { }} >
					<View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#c8c8c8', borderColor: 'white', borderWidth: 1 }}></View>
					<View style={{ flexDirection: 'column', margin: 20, }}>
						<Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Samantha Jones</Text>
						<Text style={{ fontSize: 16, color: '#fcdbd5', }}>Seattle, USA</Text>
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