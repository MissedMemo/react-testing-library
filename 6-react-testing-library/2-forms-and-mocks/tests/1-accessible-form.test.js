import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { AccessibleForm } from '../src/accessible-form'

test('form should be accessible', async () => {
  const { container } = render( <AccessibleForm /> )
  const results = await axe( container.innerHTML )
  expect( results ).toHaveNoViolations
})