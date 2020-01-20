import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Logo from '../components/Logo'
import Form from '../components/Form'

function Login() {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#555555',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logoContainer: {
      
    },
    formContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    formEmailContainer: {
      marginBottom: 30,
      height: '24%'
    },
    formPasswordContainer: {

    },
    getStartedContainer: {
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
      <View>
        <Logo />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formEmailContainer}>
          <Form />
        </View>
        <View style={styles.formPasswordContainer}>
          <Text>Password</Text>
        </View>
      </View>
      <View style={styles.getStartedContainer}>
        <Text>Get Started</Text>
      </View>
      <View style={styles.footerContainer}>
        <Text>Create Account</Text>
        <Text>Forgot Password</Text>
      </View>
    </View>
  )

}

export default Login