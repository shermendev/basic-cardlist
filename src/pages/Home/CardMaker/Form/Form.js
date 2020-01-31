import React from 'react'
import { FormGroup, Button, Form as BootstrapForm } from 'reactstrap'
import ColorButtons from './ColorButtons'
import { useSubmitCard } from './hooks'
import { useLimit } from '~hooks/useLimit'
import { useCardBoard } from './redux'

const Form = () => {
  const { isEditing } = useCardBoard()
  const hasReachedLimit = useLimit()

  const { color, errors, handleColorChange, onSubmit, register } = useSubmitCard()

  return (
    <BootstrapForm onSubmit={onSubmit}>
      <FormGroup>
        <input
          ref={register({
            maxLength: {
              message: `Max Title length is 50 characters.`,
              value: 50
            }
          })}
          className="form-control"
          name="title"
          placeholder="Card title"
          type="text"
        />
        {errors?.title?.type === `maxLength` && <p className="text-danger">{errors.title.message}</p>}
      </FormGroup>
      <FormGroup>
        <textarea
          ref={register({
            maxLength: {
              message: `Max Comment length is 200 characters.`,
              value: 200
            }
          })}
          className="form-control"
          name="comment"
          placeholder="Additional comment to your card"
        />
        {errors?.comment?.type === `maxLength` && <p className="text-danger">{errors.comment.message}</p>}
      </FormGroup>
      <FormGroup tag="fieldset">
        <ColorButtons color={color} onColorChange={handleColorChange} />
      </FormGroup>
      <FormGroup className="d-flex flex-column">
        <Button className="align-self-end" color="primary" disabled={hasReachedLimit && !isEditing} type="submit">
          {isEditing ? `Edit Card` : `Add new card`}
        </Button>
      </FormGroup>
    </BootstrapForm>
  )
}

export default React.memo(Form)
