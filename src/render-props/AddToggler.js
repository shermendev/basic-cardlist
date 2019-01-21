import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { boundMethod } from 'autobind-decorator'

class AddToggler extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      handler: this.handleToggle,
      prop: false
    }
  }

  @boundMethod
  handleToggle() {
    this.setState(({ prop }) => {
      return {
        prop: !prop
      }
    })
  }

  render() {
    const { render } = this.props

    return <>{render(this.state)}</>
  }
}

export default AddToggler
