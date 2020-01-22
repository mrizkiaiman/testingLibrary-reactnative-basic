import React from 'react'
import Button from './Button'
import { render, fireEvent } from 'react-native-testing-library'

const handleSubmitMocked = jest.fn()

function renderButton(props) {
  const component = render (
    <Button {...props} />
  )
  const button = component.queryByTestId('test-button')
  const buttonText = component.queryByTestId('test-buttonText')

  return {
    ...component,
    button,
    buttonText
  }
}

describe('Render Button', () => {
  test('Renders without crashing', () => {
    const component = renderButton()
    expect(component).toMatchSnapshot()
  })

  test('Should render buttons body, and text', () => {
    const { button, buttonText } = renderButton()
    expect(button).toBeTruthy()
    expect(buttonText).toBeTruthy()
  })

  test('Function can be called', () => {
    const { button } = renderButton({ onSubmit: handleSubmitMocked })
    fireEvent.press(button)
    expect(handleSubmitMocked).toHaveBeenCalledTimes(1)
  })
})
