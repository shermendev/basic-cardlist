import React from 'react'
import PropTypes from 'prop-types'
import FetcherButton from './FetcherButton/FetcherButton'

const Fetcher = props => <FetcherButton {...props} />

Fetcher.propTypes = {
  color: PropTypes.string.isRequired,
  hasReachedLimit: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default React.memo(Fetcher)
