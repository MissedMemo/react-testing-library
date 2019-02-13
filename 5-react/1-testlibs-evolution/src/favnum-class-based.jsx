import styled from '@emotion/styled'
import React, { Component } from 'react'

const SpacedLabel = styled.label`
  font-size: 24px;
  color: blue;
  :after {
    content: ':  ';
  }
`

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
        isValid ? null : <div>Your number is invalid</div>
      }
    </div>
  }
}

export default FavoriteNumber