import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars-rating'
import { mainColor } from '../../constants/Colors';
export default class ProductCard extends Component {
	render() {

		return (
			<View style={{ flexDirection: 'row', flex: 0.06,top:5 }}>
				<TouchableOpacity
					style={{ backgroundColor:mainColor, justifyContent: 'center', paddingHorizontal:9.5,paddingTop:2.8 ,height:26,width:26,borderRadius:13,marginRight:5}}>
					<Ionicons name='md-remove' size={17} color='white' />
				</TouchableOpacity>
				<TouchableOpacity
				style={{ backgroundColor:'#eeeeee', justifyContent: 'center',alignItems:'center',borderRadius:15,}}>
				<Text
					style={{backgroundColor: 'transparent',color: '#afafaf',paddingHorizontal: 9,textAlign: 'center',textAlignVertical: 'center',}}>{this.props.quantity}</Text>
					</TouchableOpacity>
				<TouchableOpacity
					style={{ backgroundColor:mainColor, justifyContent: 'center',paddingHorizontal:7.5,paddingTop:2.8,height:26,width:26,borderRadius:13,marginLeft:5}}>
					<Ionicons name='md-add' size={17} color= 'white' />
				</TouchableOpacity>
			</View>

		)
	}
}
//style={{backgroundColor: 'transparent',color: '#afafaf',paddingHorizontal: 9,textAlign: 'center',textAlignVertical: 'center',}}>{this.props.quantity}</Text>
