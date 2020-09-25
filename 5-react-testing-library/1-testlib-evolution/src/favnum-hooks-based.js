import React, { useState } from 'react'

const FavoriteNumber = ({min = 1, max = 42}) => {

  const [num, setNum] = useState(0)
  const [numberEntered, setNumberEntered] = useState(false)

  const handleEdit = ({target}) => {
    setNum( Number(target.value) )
    setNumberEntered(true)
  }

  const isValid = !numberEntered || num >= min && num <= max

  return <div>
    <label htmlFor='favnum'>Favorite Number:</label>
    <input id='favnum' type='number' onChange={handleEdit} value={num} />
    { isValid || <div role='alert'>Number is Invalid!</div> }
  </div>
}

export default FavoriteNumber