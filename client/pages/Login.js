import React, { useState } from 'react'
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native'

import Logo from '../components/Logo'
import Form from '../components/Form'
import Button from '../components/Button'

function Login({ navigation }) {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const toCreateAccount = () => {
    navigation.navigate('CreateAccount')
  }

  const handleSubmit = () => {
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
      alignItems: 'center'
    },
    footerMenus: {
      color: 'white'
    }
  })

  const buttonCustomStyles = {
    backgroundColor: '#888888',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const forms = [
    { 
      value: email, 
      setValue: setEmail, 
      icon: 'md-mail', 
      placeholder: 'Email', 
      iconColor: 'white' 
    },
    { value: password, 
      setValue: setPassword, 
      icon: 'md-lock', 
      placeholder: 'Password', 
      iconColor: 'white' 
    }
  ]

  return(
    <View testID="test-mainContainer" style={styles.mainContainer}>
      <Logo />
      <View testID="test-formsContainer" style={styles.formsContainer}>
        {
          forms.map((form, index) => (
            <Form key={index} {...form} />
          ))
        }
      </View>
      <View testID="test-buttonContainer" style={styles.buttonContainer}>
        <Button 
          onSubmit={handleSubmit} 
          customStyles={buttonCustomStyles} 
          name="GET STARTED" 
        />
      </View>
      <View testID="test-footerContainer" style={styles.footerContainer}>
        <TouchableOpacity onPress={toCreateAccount}>
          <Text testID="test-footerMenu-1" style={styles.footerMenus}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text testID="test-footerMenu-2" style={styles.footerMenus}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login