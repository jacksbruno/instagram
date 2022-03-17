import React, { Component } from 'react'
import { StyleSheet, View, Text, Alert, Dimensions } from 'react-native'

export default class Comentarios extends Component {
  render(){
    let view = null
    if(this.props.comments){
      view = this.props.comments.map((item, indice) => {
        return(
          <View style={styles.commentContainer} key={indice}>
            <Text style={styles.nickname}>{ item.name }</Text>
            <Text style={styles.comment}>{ item.comment }</Text>
          </View>
        )
      })
    }

    return(
      <View style={styles.container}>
        { view }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
  nickname: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: '#444'
  },
  comment: {
    color: '#444'
  }
})