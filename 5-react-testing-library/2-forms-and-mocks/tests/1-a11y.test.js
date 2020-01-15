import React from 'react'
import { render } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'
import Form from '../src/a11y.form'

test('ensure form is accessible', async () => {
  const { container } = render(<Form />)
  const results = await axe(container)
  expect( results ).toHaveNoViolations()
})