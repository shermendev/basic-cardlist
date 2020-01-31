import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Message } from './styled'
import { homeRoute } from '~config/home-route'
import { useShouldRedirect } from './hooks'

const CountDownRenderer = ({ completed, milliseconds, seconds }) => {
  const shouldRedirect = useShouldRedirect(completed)

  const preservedMilliseconds = preserveMilliseconds(milliseconds)

  const redirect = shouldRedirect ? <Redirect to={homeRoute} /> : `Redirecting to the HomePage!`

  const message = completed ? redirect : `You will be redirected in ${seconds}:${preservedMilliseconds}`

  return <Message completed={completed}>{message}</Message>
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

export default CountDownRenderer
