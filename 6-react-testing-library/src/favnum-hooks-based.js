import React, { useState } from 'react'

const FavNum = () => {

  const [number, setNumber] = useState(0)

  const handleChange = ({ target }) => {
    setNumber( target.value )
  }

  const isValid = number >= 1 && number <= 9

  return <>
    <label htmlFor='favnum'>Favorite Number</label>
    <input id='favnum' type='number' onChange={handleChange} value={number} />
    { isValid || <div>
      Number is INVALID!
    </div>}
  </>
}

export default FavNum