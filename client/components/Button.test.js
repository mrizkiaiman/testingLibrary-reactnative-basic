import React from 'react'
import Button from './Button'
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';

const functionMocked = jest.fn();

describe('Render Button', () => {
  it('Renders without crashing', () => {
    const tree = renderer.create(
      <Button />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Should render a buttons body', () => {
    const { getByTestId } = render (
      <Button />
    )
    expect(getByTestId('test-button')).toBeTruthy()
  })

  it('Should render a buttons text', () => {
    const { getByTestId } = render (
      <Button />
    )
    expect(getByTestId('test-buttonText')).toBeTruthy()
  })

  it('Command function can be called', () => {
    const { getByTestId } = render (
      <Button command={functionMocked} />
    )
    fireEvent.press(getByTestId('test-button'))
  })
})
