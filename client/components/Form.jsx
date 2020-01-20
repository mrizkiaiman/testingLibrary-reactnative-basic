import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Item, Input } from 'native-base';

function Form() {
  const styles = StyleSheet.create({
    container: {
      width: '90%',
      height: '100%',
      flexDirection: 'row'
    }
  })

  return (
    <Container style={styles.container}>
      <Content>
        <Item rounded>
          <Input placeholder='Rounded Textbox'/>
        </Item>
      </Content>
    </Container>
  )
}

export default Form