import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Form from '../components/Form'
import Button from '../components/Button'

function CreateAccount(props) {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ repeatPassword, setRepeatPassword] = useState('')

  const backToSignIn = () => {
    props.navigation.navigate('Login')
  }

  const TestFunction = () => {
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(repeatPassword)
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: '#555555',
    },
    title: {
      color: 'white',
    },
    formsContainer: {
      width: '90%',
      marginVertical: 20
    },
    buttonContainer: {
      width: '90%',
      marginBottom: 40
    },
    footerContainer: {
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft: 50
    },
    footerMenus: {
      color: 'white',
    }
  })

  const buttonCustomStyle = {
    backgroundColor: '#555555',
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const x = "< Sign In"
  const forms = [
    { value: name, setValue: setName, icon: 'md-person', placeholder: 'Name', iconColor: 'white' },
    { value: email, setValue: setEmail, icon: 'md-mail', placeholder: 'Email', iconColor: 'white' },
    { value: password, setValue: setPassword, icon: 'md-lock', placeholder: 'Password', iconColor: 'white' },
    { value: repeatPassword, setValue: setRepeatPassword, icon: 'md-lock', placeholder: 'Repeat Password', iconColor: '#555555' },
  ]

  return(
    <View testID="test-mainContainer" style={styles.mainContainer}>
      <View>
        <Text testID="test-title" style={styles.title}>CREATE ACCOUNT</Text>
      </View>
      <View testID="test-formsContainer" style={styles.formsContainer}>
        {
          forms.map((form, index) => (
            <Form key={index} {...form}  />
          ))
        }
      </View>
      <View testID="test-buttonContainer" style={styles.buttonContainer}>
        <Button command={TestFunction} customStyles={buttonCustomStyle} name="Continue"/>
      </View>
      <View testID="test-footerContainer" style={styles.footerContainer}>
        <TouchableOpacity onPress={backToSignIn}>
          <Text testID="test-footerMenu" style={styles.footerMenus}>{x}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default CreateAccount