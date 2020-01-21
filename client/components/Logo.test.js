import React from 'react'
import Logo from './Logo'
import renderer from 'react-test-renderer';
import { render } from 'react-native-testing-library';

describe('Render Logo', () => {
  it('Renders without crashing', () => {
    const tree = renderer.create(
      <Logo />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render a container', () => {
    const { getByTestId } = render (
      <Logo />
    )
    expect(getByTestId('test-logoContainer')).toBeTruthy()
  })

  it('Should render a logo image', () => {
    const { debug, getByTestId } = render (
      <Logo />
    )
    // debug()
    expect(getByTestId('test-logoImage')).toBeTruthy()
  })
})
