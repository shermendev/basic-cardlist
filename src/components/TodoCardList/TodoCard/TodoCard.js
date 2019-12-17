import React from 'react'
import { CardTitle, CardText, CardBody, Card, Col, CardHeader, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { TodoCardContainer } from './styled'

const TodoCard = ({ color, comment, id, onEdit, onRemove, title }) => {
  const hasTitle = Boolean(title)
  const hasComment = Boolean(comment)
  const fontClassesIfEmpty = `font-italic font-weight-light`

  return (
    <Col className="mt-4">
      <TodoCardContainer>
        <Card className={`bg-${color} text-white`}>
          <CardHeader>{`Card #${id}`}</CardHeader>
          <CardBody className="d-flex flex-column">
            <CardTitle className={hasTitle ? `` : fontClassesIfEmpty}>{hasTitle ? title : `no title`}</CardTitle>
            <CardText className={hasComment ? `` : fontClassesIfEmpty}>{hasComment ? comment : `no comment`}</CardText>
            <div className="d-flex justify-content-between">
              <Button color="secondary" onClick={() => onEdit(id)}>
                Edit
              </Button>
              <Button color="secondary" onClick={() => onRemove(id)}>
                Remove
              </Button>
            </div>
          </CardBody>
        </Card>
      </TodoCardContainer>
    </Col>
  )
}

TodoCard.propTypes = {
  color: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default TodoCard
