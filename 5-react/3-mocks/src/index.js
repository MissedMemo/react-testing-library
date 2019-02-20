import React from 'react'
import { render } from 'react-dom'

import App from './app'

render(
  <App greeting='Hi there!' />,
  document.getElementById('root')
)