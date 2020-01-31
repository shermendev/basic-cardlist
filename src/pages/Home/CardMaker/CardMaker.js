import React from 'react'
import { CardBody, Card, CardHeader } from 'reactstrap'
import PropTypes from 'prop-types'
import Form from './Form'
import { Container } from './styled'
import { useCardBoard } from './redux'

const getTitle = (type, idToEdit) => {
  switch (type) {
    case `edit`:
      return `Edit Card #${idToEdit}`
    case `new`:
    default:
      return `New Card`
  }
}

const CardMaker = ({ type }) => {
  const { idToEdit } = useCardBoard()

  const title = getTitle(type, idToEdit)

  return (
    <Container className="m-auto">
      <Card className="bg-light">
        <CardHeader>{title}</CardHeader>
        <CardBody>
          <Form />
        </CardBody>
      </Card>
    </Container>
  )
}

CardMaker.propTypes = {
  type: PropTypes.string
}

CardMaker.defaultProps = {
  type: `new`
}

export default React.memo(CardMaker)
