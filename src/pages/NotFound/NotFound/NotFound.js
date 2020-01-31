import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Countdown from 'react-countdown-now'
import { useLocation } from 'react-router-dom'
import { ErrorMessage, RedirectCountDown } from './styled'
import { CountDownRenderer, BouncingTitle } from '~pages/NotFound'
import { useToggler } from '~hooks/useToggler'

const NotFound = () => {
  const { handler: handleStop, prop: removeRedirect } = useToggler()
  const { pathname } = useLocation()

  return (
    <Container>
      <Row>
        <Col className="text-center mt-4 overflow-hidden">
          <BouncingTitle />
          <ErrorMessage>
            Page
            <span className="text-warning">{` ${window.location.host + pathname} `}</span>
            Not Found
          </ErrorMessage>
          <RedirectCountDown>
            {removeRedirect ? (
              <div className="text-info">Redirect Aborted!</div>
            ) : (
              <>
                <Countdown
                  date={Date.now() + 5_000}
                  intervalDelay={16}
                  precision={2}
                  renderer={({ completed, milliseconds, seconds }) => (
                    <CountDownRenderer completed={completed} milliseconds={milliseconds} seconds={seconds} />
                  )}
                />
                <Button color="danger" onClick={handleStop}>
                  Do not redirect!
                </Button>
              </>
            )}
          </RedirectCountDown>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
