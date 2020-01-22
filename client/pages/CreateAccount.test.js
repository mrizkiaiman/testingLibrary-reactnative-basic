import React from 'react'
import CreateAccount from './CreateAccount'
import renderer from 'react-test-renderer'
import { render } from 'react-native-testing-library'

describe('Render CreateAccount', () => {
  it('Renders without crashing', () => {
    const tree = renderer.create(
      <CreateAccount />
    ).toJSON();
    expect(tree).toMatchSnapshot()
  })

  it('Should render main container', () => {
    const { debug, getByTestId } = render (
      <CreateAccount />
    )
    // debug()
    expect(getByTestId('test-mainContainer')).toBeTruthy()
  })

  it('Should render title', () => {
    const { getByTestId } = render (
      <CreateAccount />
    )
    expect(getByTestId('test-title')).toBeTruthy()
  })

  it('Should render forms container', () => {
    const { getByTestId } = render (
      <CreateAccount />
    )
    expect(getByTestId('test-formsContainer')).toBeTruthy()
  })

  it('Should render buttons container', () => {
    const { getByTestId } = render (
      <CreateAccount />
    )
    expect(getByTestId('test-buttonContainer')).toBeTruthy()
  })

  it('Should render footers container', () => {
    const { getByTestId } = render (
      <CreateAccount />
    )
    expect(getByTestId('test-footerContainer')).toBeTruthy()
  })

  it('Should render footers menu', () => {
    const { getByTestId } = render (
      <CreateAccount />
    )
    expect(getByTestId('test-footerMenu')).toBeTruthy()
  })
})
