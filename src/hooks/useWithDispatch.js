import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export const useWithDispatch = actions => {
  const dispatch = useDispatch()

  return actions.map(action => bindActionCreators(action, dispatch))
}
