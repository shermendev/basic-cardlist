import React from 'react'
import {
  CardBody, Card, CardHeader, FormGroup, ButtonGroup, Input, Button 
} from 'reactstrap'
import PropTypes from 'prop-types'

import { CardMakerContainer } from './styled'

const CardMaker = ({
  color,
  comment,
  hasReachedLimit,
  id,
  isEditing,
  onAddNew,
  onColorTheme,
  onCommentChange,
  onEditSubmit,
  onTitleChange,
  title
}) => (
  <CardMakerContainer className="m-auto">
    <Card className="bg-light">
      <CardHeader>{isEditing ? `Edit Card #${id}` : `New Card`}</CardHeader>
      <CardBody>
        <FormGroup>
          <Input id="title" name="title" placeholder="Card title" type="text" value={title} onChange={onTitleChange} />
        </FormGroup>
        <FormGroup>
          <Input
            name="comment"
            placeholder="Additional comment to your card"
            type="textarea"
            value={comment}
            onChange={onCommentChange}
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <ButtonGroup>
            <Button color="secondary" onClick={() => onColorTheme(`secondary`)}>
              {color === `secondary` && `✅ `}
              {`Default`}
            </Button>
            <Button color="danger" onClick={() => onColorTheme(`danger`)}>
              {color === `danger` && `✅ `}
              {`Red`}
            </Button>
            <Button color="success" onClick={() => onColorTheme(`success`)}>
              {color === `success` && `✅ `}
              {`Green`}
            </Button>
            <Button color="warning" onClick={() => onColorTheme(`warning`)}>
              {color === `warning` && `✅ `}
              {`Yellow`}
            </Button>
          </ButtonGroup>
        </FormGroup>
        <FormGroup className="d-flex flex-column">
          <Button
            className="align-self-end"
            color="primary"
            disabled={hasReachedLimit}
            onClick={isEditing ? onEditSubmit : onAddNew}
          >
            {isEditing ? `Edit Card` : `Add new card`}
          </Button>
        </FormGroup>
      </CardBody>
    </Card>
  </CardMakerContainer>
)

CardMaker.propTypes = {
  color: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  hasReachedLimit: PropTypes.bool.isRequired,
  id: PropTypes.number,
  isEditing: PropTypes.bool,
  onAddNew: PropTypes.func,
  onColorTheme: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func,
  onTitleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

CardMaker.defaultProps = {
  id: 0,
  isEditing: false,
  onAddNew: () => {},
  onEditSubmit: () => {}
}

export default CardMaker
