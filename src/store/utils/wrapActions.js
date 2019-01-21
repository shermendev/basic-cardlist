const wrapAction = stateToMerge => (state, { payload: props }) => {
  return {
    ...state,
    ...stateToMerge(state, props)
  }
}

export const wrapActions = (actionsToWrap, actionsUntouched) => {
  const wrappedActions = {}

  for (const [actionName, action] of Object.entries(actionsToWrap)) {
    wrappedActions[actionName] = wrapAction(action)
  }

  return {
    ...wrappedActions,
    ...actionsUntouched
  }
}
