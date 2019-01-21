import React from 'react'
import { UncontrolledAlert } from 'reactstrap'
import { LimitAlertContainer } from './styled'

const LimitAlert = () => (
  <LimitAlertContainer>
    <UncontrolledAlert color="danger">Limit reached!</UncontrolledAlert>
  </LimitAlertContainer>
)

export default React.memo(LimitAlert)
