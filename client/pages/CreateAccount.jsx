import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Form from '../components/Form'
import Button from '../components/Button'

function CreateAccount() {
  const styles = StyleSheet.create({
    container: {

    },
    title: {

    },
    formsContainer: {

    },
    buttonContainer: {

    },
    footerContainer: {

    }
  })

  return(
    <View>
      <View style={styles.container}>
        <Text>CREATE ACCOUNT</Text>
      </View>
      <View style={styles.formsContainer}>
        <Form icon="md-person" placeholder="Name" />
        <Form icon="md-mail" placeholder="Email" />
        <Form icon="md-lock" placeholder="Password"/>
        <Form icon="md-lock" placeholder="Repeat Password" />
      </View>
      <View>
        <Button name="Continue"/>
      </View>
      <View>
        <Text>Sign In</Text>
      </View>
    </View>
  )

}

export default CreateAccount