import { useSelector, shallowEqual } from 'react-redux'
import { checkIfReachedLimit } from '~utils/checkIfReachedLimit'

export const useLimit = () => {
  const hasReachedLimit = useSelector(({ cardBoard: { cards } }) => checkIfReachedLimit(cards.length), shallowEqual)

  return hasReachedLimit
}
