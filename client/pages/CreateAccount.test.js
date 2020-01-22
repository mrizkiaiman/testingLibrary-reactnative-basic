import React from 'react'
import CreateAccount from './CreateAccount'
import renderer from 'react-test-renderer'
import { render } from 'react-native-testing-library'

describe('Render CreateAccount', () => {
  test('Renders without crashing', () => {
    const tree = renderer.create(
      <CreateAccount />
    ).toJSON();
    expect(tree).toMatchSnapshot()
  })

  test('Should render main container, title, forms container, footer container, and footer menu', () => {
    const { debug, getByTestId } = render (
      <CreateAccount />
    )
    // debug()
    expect(getByTestId('test-mainContainer')).toBeTruthy()
    expect(getByTestId('test-title')).toBeTruthy()
    expect(getByTestId('test-formsContainer')).toBeTruthy()
    expect(getByTestId('test-buttonContainer')).toBeTruthy()
    expect(getByTestId('test-footerContainer')).toBeTruthy()
    expect(getByTestId('test-footerMenu')).toBeTruthy()
  })
})

// import React from 'react'
// import CreateAccount from './CreateAccount'
// import { render } from 'react-native-testing-library'

// function renderCreateAccount() {
//   const component = render (
//     <CreateAccount />
//   )

//   const mainContainer = component.queryAllByTestId('test-mainContainer')
//   const title = component.queryAllByTestId('test-title')
//   const formContainer = component.queryAllByTestId('test-formsContainer')
//   const buttonContainer = component.queryAllByTestId('test-buttonContainer')
//   const footerContainer = component.queryAllByTestId('test-footerContainer')
//   const footerMenu = component.queryAllByTestId('test-footerMenu')

//   return {
//     mainContainer,
//     title,
//     formContainer,
//     buttonContainer,
//     footerContainer,
//     footerMenu
//   }
// }

// describe('Render CreateAccount', () => {
//   it('Renders without crashing', () => {
//     const component = renderCreateAccount()
//     expect(component).toMatchSnapshot()
//   })

//   it('Should render main, form, button, footer container, title, and footer menu', () => {
//     const { 
//       mainContainer,
//       title,
//       formContainer,
//       buttonContainer,
//       footerContainer,
//       footerMenu
//     } = renderCreateAccount()

//     expect(mainContainer).toBeTruthy()
//     expect(title).toBeTruthy()
//     expect(formContainer).toBeTruthy()
//     expect(buttonContainer).toBeTruthy()
//     expect(footerContainer).toBeTruthy()
//     expect(footerMenu).toBeTruthy()
//   })
// })

