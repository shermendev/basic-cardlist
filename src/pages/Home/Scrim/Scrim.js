import React from 'react'
import PropTypes from 'prop-types'
import { Body, Container } from './styled'
import { useResizeWatcher } from './hooks'

const Scrim = ({ isOpen, location }) => {
  const { containerSize } = useResizeWatcher(isOpen)

  return (
    <Container isOpen={isOpen} location={location}>
      <Body containerSize={containerSize} isOpen={isOpen} location={location} />
    </Container>
  )
}

Scrim.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  location: PropTypes.oneOf([`corner`, `center`]).isRequired
}

export default React.memo(Scrim)
