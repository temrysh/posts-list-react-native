import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native'
import { AppLoading } from 'expo'
import AppNavigator from './navigation/AppNavigator'
import { setPosts, setUsers } from './state/actions'
import { store } from './state/store'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export default class App extends Component {
  state = {
    isLoadingComplete: false
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Provider store={store}>
            <AppNavigator />
          </Provider>
        </View>
      )
    }
  }

  _retrieveDataFor = async selector => {
    const storageData = JSON.parse(await AsyncStorage.getItem(`@${selector}`))
    if (storageData) return storageData
    const apiData = await fetch(`${BASE_URL}/${selector}`).then(res => res.json())
    await AsyncStorage.setItem(`@${selector}`, JSON.stringify(apiData))
    return apiData
  }

  _loadResourcesAsync = async () => {
    try {
      store.dispatch(setPosts(await this._retrieveDataFor('posts')))
      store.dispatch(setUsers(await this._retrieveDataFor('users')))
    } catch (error) {
      this._handleLoadingError(error)
    }
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
