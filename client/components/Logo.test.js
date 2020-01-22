import React from 'react'
import Logo from './Logo'
import renderer from 'react-test-renderer'
import { render } from 'react-native-testing-library'

function renderLogo() {
  const component = render (
    <Logo />
  )
  const logoContainer = component.queryAllByTestId('test-logoContainer')
  const logoImage = component.queryAllByTestId('test-logoImage')

  return {
    logoContainer,
    logoImage
  }
}

describe('Render Logo', () => {
  test('Renders without crashing', () => {
    const component = renderLogo()
    expect(component).toMatchSnapshot()
  });

  test('Should render logos container, and image', () => {
    const { logoContainer, logoImage } = renderLogo()
    expect(logoContainer).toBeTruthy()
    expect(logoImage).toBeTruthy()
  })
})
