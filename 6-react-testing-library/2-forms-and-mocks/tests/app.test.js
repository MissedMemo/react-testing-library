import React from 'react'
import { render } from '@testing-library/react'
import App from '../src/app'

test('validate test setup...', () => {
  const { getByText } = render(<App greeting="Hello, React!" />)
  getByText( /hello, react!/i ) // throws error if not found in component
})