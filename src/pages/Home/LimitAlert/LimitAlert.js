import React from 'react'
import { UncontrolledAlert } from 'reactstrap'
import { Container } from './styled'

const LimitAlert = () => (
  <Container>
    <UncontrolledAlert color="danger">Limit reached!</UncontrolledAlert>
  </Container>
)

export default React.memo(LimitAlert)
