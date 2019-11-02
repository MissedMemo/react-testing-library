import React, { useState } from 'react'

const FavNum = ({ min = 1, max = 9}) => {

  const [number, setNumber] = useState(undefined)

  const handleChange = ({ target }) => {
    setNumber( target.value )
  }

  const isValid = number !== undefined && number >= min && number <= max

  return <>
    <label htmlFor='favnum'>Favorite Number</label>
    <input id='favnum' type='number' onChange={handleChange} value={number} />
    { isValid || <div data-testid='error-message'>
      Number is INVALID!
    </div>}
  </>
}

export default FavNum