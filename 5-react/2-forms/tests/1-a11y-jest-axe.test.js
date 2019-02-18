import 'react-testing-library/cleanup-after-each'
import 'jest-axe/extend-expect'
import React from 'react'
import { render } from 'react-testing-library'
import { axe } from 'jest-axe'


const InaccessibleForm = () => <form>
  <input name='username' placeholder='User Name' />
</form>

const AccessibleForm = () => <form>
  <label htmlFor='uniqueid' >User Name</label>
  <input id='uniqueid' placeholder='User Name' />
</form>

test('inaccessible form FAILS axe test', async () => {
  const { container } = render( <InaccessibleForm /> )
  const results = await axe( container.innerHTML )
  expect( results ).not.toHaveNoViolations()
})

test('form is accessible', async () => {
  const { container } = render( <AccessibleForm /> )
  const results = await axe( container.innerHTML )
  expect( results ).toHaveNoViolations()
})