import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Item, Input, Icon } from 'native-base';

function Form(props) {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      margin: 10,
      backgroundColor: '#888888',
      color: 'white',
    },
    icon: {
      marginHorizontal: 18,
      color: props.iconColor,
      width: '10%',
      height: 20,
    },
  })

  return (
    <Item testID="test-formItem" rounded style={styles.container}>
      <Icon testID="test-formIcon" type="Ionicons" style={styles.icon} name={props.icon} size={23} active={false} />
      <Input 
        testID="test-formInput"
        onChangeText={v => props.setValue(v)} 
        placeholder={props.placeholder} 
        placeholderTextColor="#bdc3c7"
        autoCapitalize="none"
        keyboardType="default"
      />
    </Item>
  )
}

export default Form