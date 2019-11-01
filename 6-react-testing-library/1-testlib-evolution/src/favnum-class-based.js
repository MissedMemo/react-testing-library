import React, { Component } from 'react'

class FavNum extends Component {
  state = {
    number: 0
  }

  handleChange = ({ target }) => {
    this.setState({ number: target.value })
  }

  render() {
    const { number } = this.state
    const isValid = number >= 1 && number <= 9
    return <>
      <label htmlFor='favnum'>Favorite Number</label>
      <input id='favnum' type='number' onChange={this.handleChange} value={number} />
      { isValid || <div>
        Number is INVALID!
      </div>}
    </>
  }
}

export default FavNum