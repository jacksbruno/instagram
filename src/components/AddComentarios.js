import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  TouchableWithoutFeedback as TWF
}
from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AddComentarios extends Component {
  state = {
    comentario: '',
    editMode: false
  }
  handleAddComment = () => {
    Alert.alert('Adicionado!', this.state.comentario)
  }

  render(){
    let commentArea = null
    if(this.state.editMode){
      commentArea = (
        <View style={styles.container}>
          <TextInput
            placeholder="Pode comentar..."
            style={styles.input}
            autoFocus
            value={this.state.comentario}
            onChangeText={comentario => this.setState({ comentario }) }
            onSubmitEditing={this.handleAddComment}
          />
          <TWF onPress={() => this.setState({ editMode: false })}>
            <Icon name="facebook" size={15} color="#555" />  
          </TWF>
        </View>
      )
    }else{
      commentArea = (
        <TWF onPress={() => this.setState({ editMode: true })}>
          <View style={styles.container}>
            <Icon name="facebook" size={25} color="#555" />
            <Text style={styles.caption}>Adicione um comnetário...</Text>
          </View>
        </TWF>
      )
    }

    return(
      <View style={{ flex: 1 }}>
        { commentArea }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#ccc'
  },
  input: {
    width: '90%'
  }
})