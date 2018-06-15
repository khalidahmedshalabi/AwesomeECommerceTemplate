import React, { Component } from 'react'
import { StyleSheet, View, StatusBar, Platform } from 'react-native'
import RootNavigation from './navigation/RootNavigation'
import { AppLoading, Font } from 'expo';

export default class App extends Component {
	state = {
		isLoadingComplete: false,
	};

	render() {
		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		} else {
			return (
				<View style={styles.container}>
					{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
					{Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
					<RootNavigation />
				</View>
			);
		}
	}

	_loadResourcesAsync = async () => {
		return await Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
			Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
			Entypo: require("@expo/vector-icons/fonts/Entypo.ttf"),
			MaterialIcons: require("@expo/vector-icons/fonts/MaterialIcons.ttf"),
			Octicons: require("@expo/vector-icons/fonts/Octicons.ttf")
		})
	};

	_handleLoadingError = error => {
		// In this case, you might want to report the error to your error
		// reporting service, for example Sentry
		console.warn(error);
	};

	_handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	statusBarUnderlay: {
		height: 24,
		backgroundColor: 'rgba(0,0,0,0.2)',
	},
});