import React from 'react'
import PropTypes from 'prop-types'
import { FetcherButton } from './styled'

const Fetcher = ({ color, hasReachedLimit, onClick }) => (
  <FetcherButton color={color} disabled={hasReachedLimit} onClick={onClick}>
    <span aria-label="add" role="img">
      ➕
    </span>
  </FetcherButton>
)

Fetcher.propTypes = {
  color: PropTypes.string.isRequired,
  hasReachedLimit: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Fetcher
