import React from 'react'

export const AccessibleForm = () => {
  return <form>
    <label htmlFor='username'>User Name</label>
    <input id='username' name='username' placeholder='username' />
  </form>
}