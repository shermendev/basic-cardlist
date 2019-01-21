import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { boundMethod } from 'autobind-decorator'

class WatchResize extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  state = {
    containerSize: 0
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener(`resize`, this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener(`resize`, this.handleResize)
  }

  @boundMethod
  handleResize() {
    this.setState(({ containerSize }) => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const windowBiggerSideSize = windowWidth >= windowHeight ? windowWidth : windowHeight

      if (windowBiggerSideSize === containerSize) return null

      return {
        containerSize: windowBiggerSideSize
      }
    })
  }

  render() {
    const { render } = this.props

    return <>{render(this.state)}</>
  }
}

export default WatchResize
