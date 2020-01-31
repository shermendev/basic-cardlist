import { editStart, removeCard } from '~store/slices/cardBoard'
import { useWithDispatch } from '~hooks/useWithDispatch'

export const useCardBoard = () => {
  const [handleEditStart, handleRemoveCard] = useWithDispatch([editStart, removeCard])

  return {
    handleEditStart,
    handleRemoveCard
  }
}
