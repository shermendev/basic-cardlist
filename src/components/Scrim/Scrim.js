import React from 'react'
import PropTypes from 'prop-types'
import { WatchResize } from '~renderProps'
import { ScrimBody, ScrimContainer } from './styled'

const Scrim = ({ isOpen, location }) => (
  <WatchResize
    render={({ containerSize }) => (
      <ScrimContainer isOpen={isOpen} location={location}>
        <ScrimBody containerSize={containerSize} isOpen={isOpen} location={location} />
      </ScrimContainer>
    )}
  />
)

Scrim.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  location: PropTypes.oneOf([`corner`, `center`]).isRequired
}

export default React.memo(Scrim)
