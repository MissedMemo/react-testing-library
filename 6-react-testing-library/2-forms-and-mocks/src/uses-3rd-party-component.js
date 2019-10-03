import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './uses-3rd-party.css'

const Fade = ({ children, ...props }) => {
  return <CSSTransition {...props} timeout={1000} classNames="fade" >
    { children }
  </CSSTransition>
}

class HideTheKids extends Component {
  state = {
    show: false
  }

  toggle = e => {
    const show = !this.state.show
    this.setState({ show })
  }

  render() {
    return <div className="container">
      <button onClick={ this.toggle }>Toggle</button>
      <Fade in={ this.state.show }>
        <div className="kids">
          { this.props.children }
        </div>
      </Fade>
    </div>
  }
}

export default HideTheKids