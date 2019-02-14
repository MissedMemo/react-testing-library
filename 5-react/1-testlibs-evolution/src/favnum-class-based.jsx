import React, { Component } from 'react'
import { SpacedLabel } from './favnum-styles'


class FavoriteNumber extends Component {

  static defaultProps = {
    min: 1, max: 9
  }

  state = {
    number: 0,
    numberEntered: false
  }

  handleChange = ({target}) => {
    this.setState({ number: target.value, numberEntered: true })
  }

  render() {

    const { number, numberEntered } = this.state
    const { min, max } = this.props
    const isValid = !numberEntered || ( number >= min && number <= max )

    return <div>
      <SpacedLabel htmlFor='numInput'>Favorite Number</SpacedLabel>
      <input type='number' id='numInput' value={number} onChange={this.handleChange} />
      {
        isValid ? null : <div data-testid='error-message'>Your number is invalid</div>
      }
    </div>
  }
}

export default FavoriteNumber