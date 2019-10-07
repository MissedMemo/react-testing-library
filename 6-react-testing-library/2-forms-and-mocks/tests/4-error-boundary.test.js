import '@testing-library/jest-dom/extend-expect' // belongs in jest setup...

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import expectExport from 'expect'

describe('ErrorBoundary....', () => {
  
  test('place-holder...', () => {
    expectExport(1+1).toBe(2)
  })
})