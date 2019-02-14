import styled from '@emotion/styled'
import React, { useState } from 'react'

const SpacedLabel = styled.label`
  font-size: 24px;
  color: blue;
  :after {
    content: ':  ';
  }
`

const FavoriteNumber = ({min = 1, max = 9}) => {

  const [number, setNumber] = useState(0)
  const [numberEntered, setNumberEntered] = useState(false)
  
  const handleChange = ({target}) => {
    setNumber(target.value)
    setNumberEntered(true)
  }

  const isValid = !numberEntered || ( number >= min && number <= max )
  
  return <div>
    <SpacedLabel htmlFor='numInput'>Favorite Number</SpacedLabel>
    <input type='number' id='numInput' value={number} onChange={handleChange} />
    {
      isValid ? null : <div>Your number is invalid</div>
    }
  </div>
}

export default FavoriteNumber