import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component{
  render(){
    const comments = [
      {
        name: 'Caroline vasconcelos',
        comment: 'Excelente foto!'
      },
      {
        name: 'Rafael Gustavo',
        comment: 'Muito ruim, faço melhor...'
      },
    ]
    return(
      <View style={styles.container}>
        <Header />
        <Post image={require('./src/assets/imgs/fence.jpg')} comments={comments}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})