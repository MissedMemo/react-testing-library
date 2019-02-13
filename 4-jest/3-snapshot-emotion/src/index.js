import React from 'react'
import { render } from 'react-dom'

import App from './app'

render(
  <App greeting='Hello, React!' />,
  document.getElementById('root')
)