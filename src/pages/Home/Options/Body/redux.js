import { useSelector, shallowEqual } from 'react-redux'
import { removeAllCards, resetCounter, toggleCardsOrder } from '~store/slices/cardBoard'
import { useWithDispatch } from '~hooks/useWithDispatch'

export const useCardBoard = () => {
  const [handleRemoveAllCards, handleResetCounter, handleToggleCardsOrder] = useWithDispatch([
    removeAllCards,
    resetCounter,
    toggleCardsOrder
  ])

  const { ascending } = useSelector(({ cardBoard: { ascending } }) => {
    return {
      ascending
    }
  }, shallowEqual)

  return {
    ascending,
    handleRemoveAllCards,
    handleResetCounter,
    handleToggleCardsOrder
  }
}
