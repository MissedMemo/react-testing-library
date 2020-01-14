import React, { Component } from 'react'

class FavoriteNumber extends Component {

  static defaultProps = { min: 1, max: 42}

  state = {
    num: 0,
    enteredNumber: false
  }

  handleEdit = ({target}) => {
    this.setState({num: target.value, enteredNumber: true})
  }

  render() {

    const { num, enteredNumber } = this.state
    const { min, max } = this.props

    const isValid = !enteredNumber || num >= min && num <= max

    return <div>
      <label htmlFor='favNum'>Favorite Number:</label>
      <input id='favNum' type='number' value={num} onChange={this.handleEdit} />
      { isValid || <div role='alert'>The number you entered is invalid!</div>}
    </div>
  }
}

export default FavoriteNumber