import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'
import Author from './src/components/Author'

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Header />
        <Post image={require('./src/assets/imgs/fence.jpg')}/>
        {/* <Author /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})