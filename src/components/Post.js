import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import Author from './Author'
import Comentarios from './Comentarios'
import AddComentarios from './AddComentarios'

export default class Post extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Image source={this.props.image} style={styles.image} />
        <Author email={this.props.email} name={this.props.nickname}/>
        <Comentarios comments={this.props.comments} />
        <AddComentarios />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
    resizeMode: 'contain'
  }
})