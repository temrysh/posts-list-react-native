import React from 'react'
import { createStackNavigator } from 'react-navigation'

import PostsListScreen from '../screens/PostsListScreen'
import PostDetailsScreen from '../screens/PostDetailsScreen'

export default createStackNavigator({
  PostsList: PostsListScreen,
  PostDetails: PostDetailsScreen
})
