import { useSelector, shallowEqual } from 'react-redux'

export const useErrors = () => {
  const hasErrors = useSelector(({ errors: { errors } }) => errors.length !== 0, shallowEqual)

  return hasErrors
}
