import React from 'react'
import { CardTitle, CardText, CardBody, Card, CardHeader, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { Container } from './styled'
import { useCardBoard } from './redux'

const TodoCard = ({ color, comment, id, title }) => {
  const hasTitle = Boolean(title)
  const hasComment = Boolean(comment)
  const fontClassesIfEmpty = `font-italic font-weight-light`

  const { handleEditStart, handleRemoveCard } = useCardBoard()

  return (
    <Container>
      <Card className={`bg-${color} text-white`}>
        <CardHeader>{`Card #${id}`}</CardHeader>
        <CardBody className="d-flex flex-column">
          <CardTitle className={hasTitle ? `` : fontClassesIfEmpty}>{hasTitle ? title : `no title`}</CardTitle>
          <CardText className={hasComment ? `` : fontClassesIfEmpty}>{hasComment ? comment : `no comment`}</CardText>
          <div className="d-flex justify-content-between">
            <Button color={color === `secondary` ? `info` : `secondary`} onClick={() => handleEditStart(id)}>
              Edit
            </Button>
            <Button color={color === `secondary` ? `info` : `secondary`} onClick={() => handleRemoveCard(id)}>
              Remove
            </Button>
          </div>
        </CardBody>
      </Card>
    </Container>
  )
}

TodoCard.propTypes = {
  color: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default React.memo(TodoCard)
