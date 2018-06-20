import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons';
import {Text} from 'native-base';

export default class ColorsList extends Component {
    selectItem = (key, type) => {
        let temp =this.props.colorsListData
        temp.map(item => {
            item.key == key ?
                item.selected = true
                :
                item.selected = false
        })
        this.setState({ colors: temp })
    }

    renderColorItem = (item) => {
        return (
            <TouchableOpacity onPress={() => this.selectItem(item.key)}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <View
                    style={{
                        backgroundColor: item.bgColor,
                        width: 35,
                        height: 35,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
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
                            position: 'absolute',
                            zIndex: 10,
                        }} >
                            <Feather name='check' size={17} color={'white'} />
                        </View>
                        : null
                }
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                extraData={this.state}
                horizontal={true}
                ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', width: 14 }}></View>}
                data={this.props.colorsListData}
                renderItem={({ item }) => this.renderColorItem(item)} />
        )
    }
}