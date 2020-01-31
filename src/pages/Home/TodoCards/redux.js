import { useSelector } from 'react-redux'
import doEqual from 'fast-deep-equal'

export const useCardBoard = () => {
  const { ascending, cards } = useSelector(
    ({ cardBoard: { ascending, cards } }) => {
      return {
        ascending,
        cards
      }
    },
    (prev, next) => {
      if (doEqual(prev, next)) return true

      return false
    }
  )

  return {
    ascending,
    cards
  }
}
