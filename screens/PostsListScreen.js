import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native'

import { setCurrentPost } from '../state/actions'

class PostsList extends React.Component {
  static navigationOptions = {
    title: 'Posts'
  }

  onItemPress = id => {
    this.props.onItemPress(id)
    this.props.navigation.navigate('PostDetails')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.posts.map(({ title, id }) => (
          <TouchableOpacity style={styles.albumBtn} key={id} onPress={() => this.onItemPress(id)}>
            <Text>{title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  albumBtn: {
    height: 60,
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})

const getUniqPosts = posts => posts.reduce((acc, post) => (acc.indexOf(post.id) > -1 ? acc : acc.push(post) && acc), [])

const mapStateToProps = ({ posts }) => ({
  posts: getUniqPosts(posts)
})

const mapDispatchToProps = dispatch => ({
  onItemPress: id => {
    dispatch(setCurrentPost(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)
