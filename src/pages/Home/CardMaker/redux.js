import { useSelector, shallowEqual } from 'react-redux'

export const useCardBoard = () => {
  const { idToEdit } = useSelector(({ cardBoard: { idToEdit } }) => {
    return {
      idToEdit
    }
  }, shallowEqual)

  return {
    idToEdit
  }
}
