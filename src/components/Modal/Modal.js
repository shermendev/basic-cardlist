import React from 'react'
import PropTypes from 'prop-types'
import { CardMaker, Scrim } from 'Components'
import { ModalContainer } from './styled'

const Modal = ({ cardMakerProps, isOpen, onEditSubmit }) => (
  <>
    {isOpen && (
      <ModalContainer>
        <CardMaker {...cardMakerProps} onEditSubmit={onEditSubmit} />
      </ModalContainer>
    )}
    <Scrim isOpen={isOpen} location="center" />
  </>
)

Modal.propTypes = {
  cardMakerProps: PropTypes.shape({
    color: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isEditing: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onEditSubmit: PropTypes.func.isRequired
}

export default Modal
