import { useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { addCard, editCard } from '~store/slices/cardBoard'
import { useWithDispatch } from '~hooks/useWithDispatch'

const getIsEditing = ({ cardBoard: { isEditing } }) => isEditing
const getCardToEdit = ({ cardBoard: { cards, idToEdit, isEditing } }) => {
  if (!isEditing) return null

  for (const card of cards) {
    if (card.id !== idToEdit) continue

    return card
  }

  return null
}

const cardBoardSelector = createSelector([getIsEditing, getCardToEdit], (isEditing, cardToEdit) => {
  return {
    cardToEdit,
    isEditing
  }
})

export const useCardBoard = () => {
  const [handleAddCard, handleEditCard] = useWithDispatch([addCard, editCard])

  const { cardToEdit, isEditing } = useSelector(cardBoardSelector)

  return {
    cardToEdit,
    handleAddCard,
    handleEditCard,
    isEditing
  }
}
