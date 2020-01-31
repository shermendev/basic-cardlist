import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  errors: []
}

const errorsSlice = createSlice({
  extraReducers: {
    [`@@router/LOCATION_CHANGE`]: () => initialState
  },
  initialState,
  name: `errors`,
  reducers: {
    addError(state, action) {
      const { counter } = state
      const { message } = action.payload

      state.errors.push({
        id: counter,
        message
      })
      state.counter = counter + 1
    },
    removeAllErrors: () => initialState,
    removeError(state, action) {
      const { errors } = state
      const id = action.payload

      state.errors = errors.filter(error => error.id !== id)
    }
  }
})

export const { addError, removeAllErrors, removeError } = errorsSlice.actions
export default errorsSlice.reducer
