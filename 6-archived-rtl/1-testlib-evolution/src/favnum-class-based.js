import React, { Component } from 'react'

class FavoriteNumber extends Component {

  static defaultProps = { min: 1, max: 9 }

  state = {
    num: 0
  }

  handleChange = ({target}) => {
    const num = target.value
    this.setState({num})
  }

  render() {

    const { min, max } = this.props
    const { num } = this.state
    const isValid = num && !(num < min || num > max)

    return <>
      <label htmlFor="numInput" >Favorite Number</label>
      <input type="number" id="numInput" value={ this.state.num } onChange={ this.handleChange } />
      { isValid ? null : <div data-testid="error-message">the number is INVALID</div> }
    </>
  }
}

export default FavoriteNumber