import React from 'react'
import Form from './Form'
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';

const onChangeTextMocked = jest.fn();
const CHANGE_TEXT = 'Test';

describe('Render Form', () => {
  it('Renders without crashing', () => {
    const tree = renderer.create(
      <Form />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Should render a forms item/container', () => {
    const { debug, getByTestId } = render (
      <Form />
    )
    expect(getByTestId('test-formItem')).toBeTruthy()
  })

  it('Should render a forms icon', () => {
    const { getByTestId } = render (
      <Form />
    )
    expect(getByTestId('test-formIcon')).toBeTruthy()
  })

  it('Should render a forms input-box', () => {
    const { getByTestId } = render (
      <Form />
    )
    expect(getByTestId('test-formInput')).toBeTruthy()
  })

  it('setValue is valid', () => {
    const { getByTestId } = render (
      <Form setValue={onChangeTextMocked} />
    )
    fireEvent.changeText(getByTestId('test-formInput'), CHANGE_TEXT);
  })
})
