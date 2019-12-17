import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { boundMethod } from 'autobind-decorator'
import { CountDownMessage } from './styled'

class CountDownRenderer extends Component {
  state = {
    shouldRedirect: false
  }

  componentDidUpdate(prevProps) {
    const { completed } = this.props

    if (completed && completed !== prevProps.completed) {
      this.setDeferredRedirect()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut)
  }

  @boundMethod
  setDeferredRedirect() {
    this.timeOut = setTimeout(() => {
      this.setState({
        shouldRedirect: true
      })
    }, 1_000)
  }

  render() {
    const { shouldRedirect } = this.state
    const { completed, milliseconds, seconds } = this.props

    const preservedMilliseconds = preserveMilliseconds(milliseconds)

    const redirect = shouldRedirect ? <Redirect to="/" /> : `Redirecting to the HomePage!`

    const message = completed ? redirect : `You will be redirected in ${seconds}:${preservedMilliseconds}`

    return <CountDownMessage completed={completed}>{message}</CountDownMessage>
  }
}

CountDownRenderer.propTypes = {
  completed: PropTypes.bool.isRequired,
  milliseconds: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
}

function preserveMilliseconds(rawMilliseconds) {
  const milliseconds = rawMilliseconds
    .toString()
    .slice(0, 2)
    .padEnd(2, `0`)

  return milliseconds
}

export default React.memo(CountDownRenderer)
