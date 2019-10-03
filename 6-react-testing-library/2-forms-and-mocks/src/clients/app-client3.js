import React from 'react'
import HideTheKids from '../components/uses-3rd-party-component'

const message = 'Hi, There!'

const App = () => (
  <HideTheKids>
    { message }
  </HideTheKids>
)

export default App