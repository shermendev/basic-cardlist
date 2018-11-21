import React from 'react'
import PropTypes from 'prop-types'
import styles from './Scrim.module.sass'

const Scrim = ({ containerSize, isOpen, location }) => {
  let scale = calculateScale(containerSize)

  scale = location === `corner` ? scale * 2 : scale

  const openAnimationStyles = {
    transform: `translate(-50%, -50%) scale(${scale})`
  }

  const wrapType = location === `corner` ? styles.wrap_corner : styles.wrap_center

  return (
    <div className={`${styles.wrap} ${wrapType} ${isOpen && styles.wrap_open}`}>
      <div className={`${styles.scrim} ${isOpen && styles.scrim_open}`} style={isOpen ? openAnimationStyles : {}} />
    </div>
  )
}

Scrim.propTypes = {
  containerSize: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  location: PropTypes.oneOf([`corner`, `center`]).isRequired
}

function calculateScale(containerSize) {
  return ((containerSize * Math.sqrt(2) - 70) / 70) * 2
}

export default React.memo(Scrim)
