import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text } from 'native-base'

function Buttons({ onSubmit, name, customStyles }) {
  const styles = StyleSheet.create({
    button: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  return (
    <Button 
      testID="test-button" 
      onPress={onSubmit} 
      rounded={true}
      style={{ ...styles.button, ...customStyles }}
    >
      <Text testID="test-buttonText">{name}</Text>
    </Button>
  )
}

export default Buttons
