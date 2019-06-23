import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ScrollView, Button, Text } from 'react-native'

import { setCurrentPost } from '../state/actions'

class PostDetails extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Post',
    headerLeft: <Button onPress={() => navigation.goBack()} title="Back" />
  })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.author}>by {this.props.author}</Text>
        </View>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.body}>{this.props.body}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexGrow: 2
  },
  section: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  body: {
    fontSize: 16
  }
})

const getItemById = (items, id) => items.find(item => item.id === id)

const mapStateToProps = ({ posts, users, currentPostID }) => {
  const post = getItemById(posts, currentPostID)
  const author = getItemById(users, post.userId).name
  return {
    ...post,
    author
  }
}

export default connect(mapStateToProps)(PostDetails)
