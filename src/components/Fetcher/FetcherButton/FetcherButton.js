import React from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import styles from './FetcherButton.module.sass'

const FetcherButton = ({ color, hasReachedLimit, onClick }) => (
  <Button className={styles.btn} color={color} disabled={hasReachedLimit} onClick={onClick}>
    <span aria-label="add" role="img">
      ➕
    </span>
  </Button>
)

FetcherButton.propTypes = {
  color: PropTypes.string.isRequired,
  hasReachedLimit: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FetcherButton
