import React from 'react'
import Form from './Form'
import { render, fireEvent } from 'react-native-testing-library'

const onChangeTextMocked = jest.fn()
const CHANGE_TEXT = 'Test'

function renderForm(props) {
  const component = render(
    <Form {...props} />
  )
  const formItem = component.queryAllByTestId('test-formItem')
  const formIcon = component.queryAllByTestId('test-formIcon')
  const formInput = component.queryAllByTestId('test-formInput')

  return {
    ...component,
    formItem,
    formIcon,
    formInput
  }
}

describe('Render Form', () => {
  test('Renders without crashing', () => {
    const component = renderForm()
    expect(component).toMatchSnapshot()
  })

  test('Should render a forms item/container, icon, and input-box', () => {
    const { formItem, formIcon, formInput } = renderForm()
    expect(formItem).toBeTruthy()
    expect(formIcon).toBeTruthy()
    expect(formInput).toBeTruthy()
  })

  test('setValue is valid', () => {
    const { getByTestId } = render (
      <Form setValue={onChangeTextMocked} />
    )
    fireEvent.changeText(getByTestId('test-formInput'), CHANGE_TEXT)
  })
})
