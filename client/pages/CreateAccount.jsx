import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Form from '../components/Form'
import Button from '../components/Button'

function CreateAccount(props) {
  const backToSignIn = () => {
    props.navigation.navigate('Login')
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

  return(
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>CREATE ACCOUNT</Text>
      </View>
      <View style={styles.formsContainer}>
        <Form icon="md-person" placeholder="Name" />
        <Form icon="md-mail" placeholder="Email" />
        <Form icon="md-lock" placeholder="Password"/>
        <Form icon="md-lock" placeholder="Repeat Password" />
      </View>
      <View style={styles.buttonContainer}>
        <Button customStyles={buttonCustomStyle} name="Continue"/>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={backToSignIn}>
          <Text style={styles.footerMenus}>{x}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default CreateAccount