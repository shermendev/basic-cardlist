import React from 'react'
import { CardMaker, Scrim } from '~pages/Home'
import { Container } from './styled'
import { useCardBoard } from './redux'

const Modal = () => {
  const { isEditing } = useCardBoard()

  return (
    <>
      {isEditing && (
        <Container>
          <CardMaker type="edit" />
        </Container>
      )}
      <Scrim isOpen={isEditing} location="center" />
    </>
  )
}

export default React.memo(Modal)
