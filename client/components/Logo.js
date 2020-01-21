import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

function Logo() {
  const styles = StyleSheet.create({
    image: {
      width: 330,
      height: 100
    }
  })

  return (
    <View testID="test-logoContainer">
      <Image testID="test-logoImage" style={styles.image} source={require('../assets/logo.png')}></Image>
    </View>
  )
}

export default Logo