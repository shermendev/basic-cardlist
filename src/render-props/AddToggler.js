import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { boundMethod } from 'autobind-decorator'

class AddToggler extends Component {
  state = {
    prop: false
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

    return (
      <>
        {render({
          ...this.state,
          handler: this.handleToggle
        })}
      </>
    )
  }
}

AddToggler.propTypes = {
  render: PropTypes.func.isRequired
}

export default AddToggler
