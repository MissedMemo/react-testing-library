import React, { Component } from 'react'

class FavNum extends Component {

  static defaultProps = { min: 1, max: 9}

  state = {
    number: undefined
  }

  handleChange = ({ target }) => {
    this.setState({ number: target.value })
  }

  render() {
    
    const { number } = this.state
    const { min, max } = this.props
    const isValid = number !== undefined && number >= min && number <= max

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