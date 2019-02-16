import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import 'jest-axe/extend-expect'
import React from 'react'
import { render } from 'react-testing-library'
import { axe } from 'jest-axe'


const Form = () => <form>
  <label htmlFor='username' >User Name</label>
  <input id='username' placeholder='User Name' />
</form>

test('form is accessible', async () => {
  const { container } = render( <Form /> )
  const results = await axe( container.innerHTML )
  expect( results ).toHaveNoViolations()
})