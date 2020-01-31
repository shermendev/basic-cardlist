import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { CardMaker, TodoCards, Fetcher, Options, Modal, LimitAlert, ErrorsAlerts } from '~pages/Home'
import { useLimit } from '~hooks/useLimit'
import { useErrors } from './redux'

const Home = () => {
  const hasReachedLimit = useLimit()
  const hasErrors = useErrors()

  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col className="m-auto" xs="12">
            <CardMaker type="new" />
          </Col>
        </Row>
      </Container>
      <TodoCards />
      <Fetcher />
      <Options />
      {hasErrors && <ErrorsAlerts />}
      {hasReachedLimit && <LimitAlert />}
      <Modal />
    </>
  )
}

export default Home
