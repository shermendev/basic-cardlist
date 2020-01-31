import doEqual from 'fast-deep-equal'

export const deepMemoReducer = (prevState, _newData) => {
  const newData = typeof _newData === `function` ? _newData(prevState) : _newData

  const newState = {
    ...prevState,
    ...newData
  }

  if (doEqual(prevState, newState)) return prevState

  return newState
}
