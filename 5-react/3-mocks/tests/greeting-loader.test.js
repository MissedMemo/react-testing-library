import React from 'react'
import { render, fireEvent, wait } from 'react-testing-library'
import ClassBased_GreetingLoader from '../src/greeting-loader-class'
import HooksBased_GreetingLoader from '../src/greeting-loader-class'
import { loadGreeting as mockLoadGreeting } from '../src/greeting-api'

jest.mock( '../src/greeting-api', () => {
  return {
    loadGreeting: jest.fn( subject => Promise.resolve(`Hello, ${subject}!`) )
  }
})

afterEach( () => { mockLoadGreeting.mock.calls = [] })


describe( '<ClassBased_GreetingLoader />', () => {

  test( 'should load greeting on click', async () => {
    const { getByLabelText, getByText, getByTestId } = render( <ClassBased_GreetingLoader /> )
    const input = getByLabelText( /name:/i )
    const button = getByText( /submit/i )
    input.value = 'Joe'
    fireEvent.click( button )
    expect( mockLoadGreeting ).toHaveBeenCalledTimes(1)
    expect( mockLoadGreeting ).toHaveBeenCalledWith('Joe')
    await wait( () => expect( getByTestId( 'greeting' ) ).toHaveTextContent('Hello, Joe!') )
  })

})

describe( '<HooksBased_GreetingLoader />', () => {

  test( 'should load greeting on click', async () => {
    const { getByLabelText, getByText, getByTestId } = render( <HooksBased_GreetingLoader /> )
    const input = getByLabelText( /name:/i )
    const button = getByText( /submit/i )
    input.value = 'Joe'
    fireEvent.click( button )
    expect( mockLoadGreeting ).toHaveBeenCalledTimes(1)
    expect( mockLoadGreeting ).toHaveBeenCalledWith('Joe')
    await wait( () => expect( getByTestId( 'greeting' ) ).toHaveTextContent('Hello, Joe!') )
  })

})
