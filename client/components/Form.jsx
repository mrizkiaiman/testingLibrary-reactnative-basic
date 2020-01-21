import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Item, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

function Form(props) {
  const styles = StyleSheet.create({
    container: {
      width: '90%',
      height: '16%',
      margin: 10,
      alignItems: 'center'
    },
    logo: {
      marginHorizontal: 18
    }
  })

  return (
    <Item rounded style={styles.container}>
      <Ionicons style={styles.logo} name={props.icon} size={23} color="white" />
      <Input placeholder={props.placeholder} placeholderTextColor="#bdc3c7"/>
    </Item>
  )
}

export default Form