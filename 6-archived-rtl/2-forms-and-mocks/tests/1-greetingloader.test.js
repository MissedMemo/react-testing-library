import '@testing-library/jest-dom/extend-expect' // move to jest setup test framework script!

import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { loadGreeting as mockLoadGreeting } from '../src/api'
import GreetingLoader_ClassBased from '../src/components/greetingloader-classbased'
import GreetingLoader_Functional from '../src/components/greetingloader-functional'

jest.mock( '../src/api', () => {
  return {
    loadGreeting: jest.fn( name => Promise.resolve(`Yowza, ${name}`) )
  }
})

afterEach( () => { jest.clearAllMocks() })


describe('class-based version of greetingloader', () => {

  test('loads greetings on click', async () => {
    const { getByText, getByLabelText, getByTestId } = render( <GreetingLoader_ClassBased />)
    const nameInput = getByLabelText( /name/i )
    const loadButton = getByText( /load/i )
    nameInput.value = "Mary"
    fireEvent.click(loadButton)
    expect( mockLoadGreeting ).toHaveBeenCalledTimes(1)
    expect( mockLoadGreeting ).toHaveBeenCalledWith('Mary')
    await wait( () => expect( getByTestId('greeting') ).toHaveTextContent( 'Yowza, Mary' ) )
  })

})

describe('functional (Hooks-based) version of greetingloader', () => {

  test('loads greetings on click', async () => {
    const { getByText, getByLabelText, getByTestId } = render( <GreetingLoader_Functional />)
    const nameInput = getByLabelText( /name/i )
    const loadButton = getByText( /load/i )
    nameInput.value = "Joe"
    fireEvent.click(loadButton)
    expect( mockLoadGreeting ).toHaveBeenCalledTimes(1)
    expect( mockLoadGreeting ).toHaveBeenCalledWith('Joe')
    await wait( () => expect( getByTestId('greeting') ).toHaveTextContent( 'Yowza, Joe' ) )
  })

})