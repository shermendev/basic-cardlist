import { persistReducer } from 'redux-persist'
import localForage from 'localforage'
import { createSlice } from '@reduxjs/toolkit'
import doEqual from 'fast-deep-equal'
import storageConfig from '~store/storageConfig'
import { checkIfReachedLimit } from '~utils/checkIfReachedLimit'

const initialState = {
  ascending: true,
  cards: [],
  counter: 0,
  idToEdit: 0,
  isEditing: false
}

const cardBoardSlice = createSlice({
  initialState,
  name: `cardBoard`,
  reducers: {
    addCard(state, action) {
      const { cards, counter } = state
      const { color, comment, title } = action.payload

      if (checkIfReachedLimit(cards.length)) return state

      state.cards.push({
        color,
        comment,
        id: counter,
        title
      })

      state.counter = counter + 1
    },
    editCard(state, action) {
      const { cards, idToEdit } = state
      const editedCard = action.payload

      for (const [index, card] of cards.entries()) {
        if (card.id !== idToEdit) continue

        const newCard = {
          ...card,
          ...editedCard
        }

        if (doEqual(card, newCard)) {
          state.idToEdit = 0
          state.isEditing = false

          return state
        }

        state.cards[index] = {
          ...card,
          ...newCard
        }
        state.idToEdit = 0
        state.isEditing = false

        return state
      }

      state.idToEdit = 0
      state.isEditing = false
    },
    editStart(state, action) {
      const { cards } = state
      const id = action.payload

      const hasId = cards.some(card => card.id === id)

      if (!hasId) return state

      state.idToEdit = id
      state.isEditing = true
    },
    removeAllCards(state) {
      const { cards } = state

      if (cards.length === 0) return state

      state.cards = []
    },
    removeCard(state, action) {
      const { cards } = state
      const id = action.payload

      state.cards = cards.filter(card => card.id !== id)
    },
    resetCounter(state) {
      const { cards, counter } = state

      if (cards.length === 0 && counter === 0) return state

      if (cards.length === 0 && counter !== 0) {
        state.counter = 0

        return state
      }

      const newCards = cards.map((card, index) => {
        return {
          ...card,
          id: index
        }
      })

      const isDifferent = newCards.some((newCard, index) => newCard.id !== cards[index].id)

      if (!isDifferent) return state

      const newCounter = newCards.length

      state.cards = newCards
      state.counter = newCounter
    },
    toggleCardsOrder(state) {
      const { ascending } = state

      state.ascending = !ascending
    }
  }
})

export const {
  addCard,
  editCard,
  editStart,
  removeAllCards,
  removeCard,
  resetCounter,
  toggleCardsOrder
} = cardBoardSlice.actions

const config = {
  key: `cardBoard`,
  storage: localForage,
  whitelist: storageConfig.cardBoard
}

const storedReducer = persistReducer(config, cardBoardSlice.reducer)

export default storedReducer
