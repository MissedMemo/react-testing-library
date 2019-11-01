import React from 'react'
import { render } from 'react-dom'
import Favorite from '../src/favnum-class-based'

test('should render an input with expected label text', () => {
  const div = document.createElement('div')
  render( <Favorite />, div )
  console.log( div.innerHtml )
})