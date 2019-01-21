import { checkIfReachedLimit } from 'Utils'
import { getRandomColor, getRandomShouldExist } from 'Utils/random'
import { handleActions } from 'redux-actions'
import { wrapActions } from 'Store/utils/wrapActions'
import * as actionTypes from './actions'

function toggleOrder({ ascending }) {
  return {
    ascending: !ascending
  }
}

function reset({ counter, list }) {
  if (list.length === 0 && counter === 0) return null

  if (list.length === 0 && counter !== 0) {
    return {
      counter: 0
    }
  }

  const newList = list.map((key, index) => {
    return {
      ...key,
      id: index
    }
  })

  const isDifferent = newList.some((newListItem, index) => newListItem.id !== list[index].id)

  if (!isDifferent) return null

  const newCounter = newList.length

  return {
    counter: newCounter,
    list: newList
  }
}

function purge({ list }) {
  if (list.length === 0) return null

  return {
    hasReachedLimit: false,
    list: []
  }
}

function editSubmit({ currentCardToEdit, list }) {
  const { id } = currentCardToEdit

  const newList = list.map(listItem => {
    if (listItem.id === id) {
      return {
        ...listItem,
        ...currentCardToEdit
      }
    }

    return listItem
  })

  return {
    isEditing: false,
    list: newList
  }
}

function addNew({
  color, comment, counter, hasReachedLimit, list, title 
}) {
  if (hasReachedLimit) return null

  const newList = list.concat([
    {
      color,
      comment,
      id: counter,
      title
    }
  ])

  const newCounter = counter + 1

  return {
    color: `secondary`,
    colorSelected: `default`,
    comment: ``,
    counter: newCounter,
    hasReachedLimit: checkIfReachedLimit(newList.length),
    list: newList,
    title: ``
  }
}

function edit({ list }, { id }) {
  const newList = list.filter(key => key.id === id)

  return {
    currentCardToEdit: newList[0],
    isEditing: true
  }
}

function remove({ list }, { id }) {
  const newList = list.filter(key => key.id !== id)

  return {
    hasReachedLimit: false,
    list: newList
  }
}

function inputChange({ currentCardToEdit, isEditing }, { inputName, inputValue }) {
  if (isEditing) {
    return {
      currentCardToEdit: {
        ...currentCardToEdit,
        [inputName]: inputValue
      }
    }
  }

  return {
    [inputName]: inputValue
  }
}

function setFetcherColor(state, { fetcherColor }) {
  return {
    fetcherColor: fetcherColor
  }
}

function fetchNew({ counter, hasReachedLimit, list }, { cardData, color }) {
  if (hasReachedLimit) return null

  const card = {
    color,
    comment: getRandomShouldExist() ? cardData.body.slice(0, 128) : ``,
    id: counter,
    title: getRandomShouldExist() ? cardData.title.slice(0, 32) : ``
  }
  const newList = list.concat([card])
  const newCounter = counter + 1

  return {
    counter: newCounter,
    hasReachedLimit: checkIfReachedLimit(newList.length),
    list: newList
  }
}

function colorTheme({ color, currentCardToEdit, isEditing }, { newColor }) {
  if (!isEditing && newColor === color) return null

  if (isEditing && newColor === currentCardToEdit.color) return null

  if (isEditing) {
    return {
      currentCardToEdit: {
        ...currentCardToEdit,
        color: newColor
      }
    }
  }

  return {
    color: newColor
  }
}

const initialState = {
  ascending: true,
  color: `secondary`,
  comment: ``,
  counter: 0,
  currentCardToEdit: {
    color: ``,
    comment: ``,
    id: 0,
    title: ``
  },
  fetcherColor: getRandomColor(),
  hasReachedLimit: false,
  isEditing: false,
  list: [],
  title: ``
}

const reducer = handleActions(wrapActions({
  [actionTypes.reset]: reset,
  [actionTypes.edit]: edit,
  [actionTypes.purge]: purge,
  [actionTypes.editSubmit]: editSubmit,
  [actionTypes.addNew]: addNew,
  [actionTypes.toggleOrder]: toggleOrder,
  [actionTypes.remove]: remove,
  [actionTypes.inputChange]: inputChange,
  [actionTypes.setFetcherColor]: setFetcherColor,
  [actionTypes.fetchNew]: fetchNew,
  [actionTypes.colorTheme]: colorTheme
}),
initialState)

export default reducer
