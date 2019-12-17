const wrapAction = action => (state, { payload: props }) => {
  return {
    ...state,
    ...action(state, props)
  }
}

export const wrapActions = (actionsToWrap, actionsUntouched) => {
  const wrappedActions = Object.entries(actionsToWrap).reduce((accumulator, [actionName, action]) => {
    return {
      ...accumulator,
      [actionName]: wrapAction(action)
    }
  }, {})

  return {
    ...wrappedActions,
    ...actionsUntouched
  }
}
