import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './hidden-message.css'

const Fade = ({children, ...props}) => (
  <CSSTransition {...props} timeout={2000} classNames="fade" unmountOnExit >
    {children}
  </CSSTransition>
)

class HiddenMessage extends Component {
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
        <div className="content">
        { this.props.children }
        </div>
      </Fade>
    </div>
  }
}

export default HiddenMessage
