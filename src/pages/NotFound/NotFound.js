import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import ReactRouterPropTypes from 'react-router-prop-types'
import Countdown from 'react-countdown-now'
import { AddToggler } from 'RenderProps'
import { ErrorMessage, RedirectCountDown } from './styled'
import CountDownRenderer from './CountDownRenderer'
import BouncingTitle from './BouncingTitle'

const NotFound = ({ location }) => (
  <Container>
    <Row>
      <Col className="text-center mt-4">
        <BouncingTitle />
        <ErrorMessage>
          Page
          <span className="text-warning">{` ${window.location.host + location.pathname} `}</span>
          Not Found
        </ErrorMessage>
        <AddToggler
          render={({ handler: handleStop, prop: removeRedirect }) => (
            <RedirectCountDown>
              {removeRedirect ? (
                <div className="text-info">Redirect Aborted!</div>
              ) : (
                <>
                  <Countdown
                    date={Date.now() + 5000}
                    intervalDelay={16}
                    precision={2}
                    renderer={props => <CountDownRenderer {...props} />}
                  />
                  <Button color="danger" onClick={handleStop}>
                    Do not redirect!
                  </Button>
                </>
              )}
            </RedirectCountDown>
          )}
        />
      </Col>
    </Row>
  </Container>
)

NotFound.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
}

export default NotFound
