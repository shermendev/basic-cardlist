import { useSelector, shallowEqual } from 'react-redux'

export const useCardBoard = () => {
  const { isEditing } = useSelector(({ cardBoard: { isEditing } }) => {
    return {
      isEditing
    }
  }, shallowEqual)

  return {
    isEditing
  }
}
