import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Logo from '../components/Logo'
import Form from '../components/Form'
import Button from '../components/Button'

function Login() {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#555555',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    formsContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonContainer: {
      marginTop: 50
    },
    footerContainer: {
      padding: 30,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  })

  return(
    <View style={styles.mainContainer}>
      <Logo />
      <View style={styles.formsContainer}>
        <Form icon="md-mail" placeholder="Email"/>
        <Form icon="md-lock" placeholder="Password"/>
      </View>
      <View style={styles.getStartedContainer}>
        <Button name="GET STARTED" />
      </View>
      <View style={styles.footerContainer}>
        <Text>Create Account</Text>
        <Text>Forgot Password</Text>
      </View>
    </View>
  )

}

export default Login