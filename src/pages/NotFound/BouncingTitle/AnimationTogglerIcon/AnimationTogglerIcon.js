import React from 'react'
import PropTypes from 'prop-types'
import { Fire, Snowflake } from './styled'

const AnimationTogglerIcon = ({ isFrozen }) => (isFrozen ? <Fire /> : <Snowflake />)

AnimationTogglerIcon.propTypes = {
  isFrozen: PropTypes.bool.isRequired
}

export default AnimationTogglerIcon
