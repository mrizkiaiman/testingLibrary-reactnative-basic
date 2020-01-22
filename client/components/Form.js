import React from 'react'
import { StyleSheet } from 'react-native'
import { 
  Item, 
  Input, 
  Icon 
} from 'native-base'

function Form({ value, setValue, placeholder, icon, iconColor}) {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      margin: 10,
      backgroundColor: '#888888',
      color: 'white'
    },
    icon: {
      marginHorizontal: 18,
      color: iconColor,
      width: '10%',
      height: 20
    },
  })

  return (
    <Item 
      testID="test-formItem" 
      rounded={true} 
      style={styles.container}
    >
      <Icon 
        testID="test-formIcon" 
        style={styles.icon} 
        name={icon}  
      />
      <Input 
        testID="test-formInput"
        onChangeText={setValue} 
        placeholder={placeholder} 
        placeholderTextColor="#bdc3c7"
        autoCapitalize="none"
        keyboardType="default"
        value={value}
      />
    </Item>
  )
}

export default Form