import React from 'react'
import { Spinner, SpinnerContainer } from './styled'

const Spinners = ({ hasReachedLimit, spinners }) => {
  if (hasReachedLimit) {
    spinners.list.forEach(({ cancelRequest }) => {
      cancelRequest(`limit`)
    })

    return null
  }

  return spinners.list.map(({ cancelRequest, color: spinnerColor, id }) => (
    <SpinnerContainer
      key={id}
      color={spinnerColor}
      onClick={() => {
        cancelRequest(`Request Canceled`)
      }}
    >
      <Spinner />
    </SpinnerContainer>
  ))
}

export default React.memo(Spinners)
