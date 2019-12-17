import { handleActions } from 'redux-actions'
import doEqual from 'fast-deep-equal'
import { wrapActions } from '~store/utils/wrapActions'
import { getRandomColor, getRandomShouldExist } from '~utils/random'
import { checkIfReachedLimit } from '~utils/checkIfReachedLimit'
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
    list: []
  }
}

function editSubmit({ currentCardToEdit, list }) {
  const { id } = currentCardToEdit

  for (const [index, listItem] of list.entries()) {
    if (listItem.id === id) {
      if (doEqual(listItem, currentCardToEdit)) {
        return {
          isEditing: false
        }
      }

      const newList = [...list]

      newList[index] = {
        ...currentCardToEdit
      }

      return {
        isEditing: false,
        list: newList
      }
    }
  }

  return {
    isEditing: false
  }
}

function addNew({ color, comment, counter, list, title }) {
  if (checkIfReachedLimit(list.length)) return null

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

function setFetcherColor({ fetcherColor: currentFetcherColor }, { fetcherColor: newFetcherColor }) {
  if (currentFetcherColor === newFetcherColor) return null

  return {
    fetcherColor: newFetcherColor
  }
}

function fetchNew({ counter, list }, { cardData, color }) {
  if (checkIfReachedLimit(list.length)) return null

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
  isEditing: false,
  list: [],
  title: ``
}

const reducer = handleActions(
  wrapActions({
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
  initialState
)

export default reducer
