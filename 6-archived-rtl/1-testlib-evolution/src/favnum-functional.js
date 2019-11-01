import React, { useState } from 'react'

const FavoriteNumber = ({min = 1, max = 9}) => {

  const [num, setNum] = useState(0)

  const handleChange = ({target}) => setNum(target.value)

  const isValid = num && !( num < min || num > max )

  return <>
    <label htmlFor="numInput">Favorite Number</label>
    <input id="numInput" type="number" value={num} onChange={ handleChange } />
    { isValid ? null : <div data-testid="error-message">/the number is Invalid/i</div>}
  </>
}

export default FavoriteNumber