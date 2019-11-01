import '@testing-library/jest-dom/extend-expect' // belongs in jest setup...

import React, { Component } from 'react'
import { render, fireEvent } from '@testing-library/react'
import { reportError as mockReportError } from '../src/api'
import ErrorBoundary from '../src/components/error-boundary'

beforeEach( () => {
  // temporarily override console error output to prevent extraneous warnings etc. on throw....
  jest.spyOn( console, 'error' ).mockImplementation( () => {} )
})

afterEach( () => {
  console.error.mockRestore()
})

// mock the api call, without any delay...
jest.mock( '../src/api.js', () => ({
  reportError: jest.fn( () => Promise.resolve({ success: true }) )
}))

const BadComponent = ({ shouldThrow }) => {
  if ( shouldThrow ) {
    throw Error('💣 BOOM!')
  } else {
    return <>All Good!</>
  }
}

test('calls report error and registers a problem...', () => {

  const { container, rerender, getByText } = render( <ErrorBoundary><BadComponent /></ErrorBoundary> )

  expect(container).toHaveTextContent('All Good!')

  rerender( <ErrorBoundary>
    <BadComponent shouldThrow={true} />
  </ErrorBoundary> )

  expect(container).toHaveTextContent('Whoops!')
  expect(console.error).toHaveBeenCalledTimes(2) // once by JSDom & once by React
  expect( mockReportError ).toHaveBeenCalledTimes(1)

  const error = expect.any(Error)
  const info = { componentStack: expect.stringContaining("BOOM!") }
  console.log({error})
  console.log({info})
  //expect( mockReportError ).toHaveBeenCalledWith( error )
})