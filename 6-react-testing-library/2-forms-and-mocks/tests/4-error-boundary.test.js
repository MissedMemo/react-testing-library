import '@testing-library/jest-dom/extend-expect' // belongs in jest setup...

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ErrorBoundary from '../src/components/error-boundary'
import { reportError as mockReportError } from '../src/api'

beforeEach( () => {
  // temporarily override console error output to prevent extraneous warnings etc. on throw....
  jest.spyOn( console, 'error' ).mockImplementation( () => {} )
})

afterEach( () => {
  console.error.mockRestore()
})

// mock the api call, without any delay...
jest.mock( '../src/api', () => {
  reportError: jest.fn( () => Promise.resolve({ success: true }) )
})

const BadComponent = ({ shouldThrow }) => {
  if ( shouldThrow ) {
    throw Error('💣 BOOM!')
  } else {
    return null
  }
}

test('calls report error and registers a problem...', () => {

  const { container, rerender, getByText } = render( <ErrorBoundary><BadComponent /></ErrorBoundary> )

  /*
  rerender( <ErrorBoundary>
    <BadComponent shouldThrow={true} />
  </ErrorBoundary> )
    */

  expect( mockReportError ).toHaveBeenCalledTimes(1)
})