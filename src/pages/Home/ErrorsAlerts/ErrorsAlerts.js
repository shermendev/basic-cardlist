import React from 'react'
import { Alert } from 'reactstrap'
import { useErrors } from './redux'
import { Container, CloseAllIcon, CloseAllButton } from './styled'

const ErrorsAlerts = () => {
  const { errors, handleRemoveAllErrors, handleRemoveError } = useErrors()

  const alerts = errors.map(({ id, message }) => (
    <Alert
      key={id}
      color="danger"
      toggle={() => {
        handleRemoveError(id)
      }}
    >
      {message}
    </Alert>
  ))

  return (
    <Container>
      <div>{alerts}</div>
      {errors.length > 1 && (
        <CloseAllButton color="danger" onClick={handleRemoveAllErrors}>
          Clear Errors
          <CloseAllIcon />
        </CloseAllButton>
      )}
    </Container>
  )
}

export default ErrorsAlerts
