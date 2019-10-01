import React, { useState } from 'react'

const FavoriteNumber = () => {

  const [num, setNum] = useState(0)

  const handleChange = ({target}) => setNum(target.value)

  return <>
    <label htmlFor="numInput">Favorite Number</label>
    <input id="numInput" type="number" value={num} onChange={ handleChange } />
  </>
}

export default FavoriteNumber