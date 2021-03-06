import React from 'react'
import { StyleSheet, View, Text, Platform, Image } from 'react-native'

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={require('../assets/imgs/icon.png')} style={styles.image} />
        <Text style={styles.title}>Instagram</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    width: '100%'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28
  }
})