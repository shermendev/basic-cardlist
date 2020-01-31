import { addCard } from '~store/slices/cardBoard'
import { addError } from '~store/slices/errors'
import { useWithDispatch } from '~hooks/useWithDispatch'

export const useCardBoard = () => {
  const [handleAddCard] = useWithDispatch([addCard])

  return {
    handleAddCard
  }
}

export const useErrors = () => {
  const [handleAddError] = useWithDispatch([addError])

  return {
    handleAddError
  }
}
