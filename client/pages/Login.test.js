import React from 'react'
import Login from './Login'
import renderer from 'react-test-renderer'
import { render } from 'react-native-testing-library'

describe('Render Login', () => {
  it('Renders without crashing', () => {
    const tree = renderer.create(
      <Login />
    ).toJSON();
    expect(tree).toMatchSnapshot()
  })

  it('Should render main container, button container, forms container, footers container, and footers menus', () => {
    const { getByTestId } = render (
      <Login />
    )
    expect(getByTestId('test-buttonContainer')).toBeTruthy()
    expect(getByTestId('test-formsContainer')).toBeTruthy()
    expect(getByTestId('test-mainContainer')).toBeTruthy()
    expect(getByTestId('test-footerMenu-2')).toBeTruthy()
    expect(getByTestId('test-footerMenu-1')).toBeTruthy()
  })
})
