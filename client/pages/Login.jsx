import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Logo from '../components/Logo'
import Form from '../components/Form'
import Button from '../components/Button'

function Login(props) {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const toCreateAccount = () => {
    props.navigation.navigate('CreateAccount')
  }

  const TestFunction = () => {
    console.log(email)
    console.log(password)
  }

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#555555',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    formsContainer: {
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      marginVertical: 45
    },
    buttonContainer: {
      width: '90%'
    },
    footerContainer: {
      padding: 30,
      marginTop: 14,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    footerMenus: {
      color: 'white'
    }
  })

  const buttonCustomStyles = {
    backgroundColor: '#888888',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return(
    <View style={styles.mainContainer}>
      <Logo />
      <View style={styles.formsContainer}>
        <Form value={email} setValue={setEmail} icon="md-mail" placeholder="Email"/>
        <Form value={password} setValue={setPassword} icon="md-lock" placeholder="Password"/>
      </View>
      <View style={styles.buttonContainer}>
        <Button command={TestFunction} customStyles={buttonCustomStyles} name="GET STARTED" />
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={toCreateAccount}>
          <Text style={styles.footerMenus}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerMenus}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login