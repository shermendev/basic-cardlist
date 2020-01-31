import { useSelector, shallowEqual } from 'react-redux'
import { removeError, removeAllErrors } from '~store/slices/errors'
import { useWithDispatch } from '~hooks/useWithDispatch'

export const useErrors = () => {
  const [handleRemoveError, handleRemoveAllErrors] = useWithDispatch([removeError, removeAllErrors])
  const { errors } = useSelector(({ errors: { errors } }) => {
    return {
      errors
    }
  }, shallowEqual)

  return {
    errors,
    handleRemoveAllErrors,
    handleRemoveError
  }
}
