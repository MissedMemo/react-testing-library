import React, { Component } from 'react'

class FavoriteNumber extends Component {

  state = {
    num: 0
  }

  handleChange = ({target}) => {
    const num = +target.value
    this.setState({num})
  }

  render() {
    return <>
      <label htmlFor="numInput" >Favorite Number</label>
      <input type="number" id="numInput" value={ this.num } onChange={ this.handleChange } />
    </>
  }
}

export default FavoriteNumber