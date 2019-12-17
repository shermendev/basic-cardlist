import axios from 'axios'
import { createActions } from 'redux-actions'
import to from 'await-to-js'
import { getRandomColor, getRandomPostId } from '~utils/random'

export const {
  addNew,
  colorTheme,
  edit,
  editSubmit,
  fetchNew,
  inputChange,
  purge,
  remove,
  reset,
  setFetcherColor,
  toggleOrder
} = createActions({
  ADD_NEW: () => {},
  COLOR_THEME: newColor => {
    return {
      newColor
    }
  },
  EDIT: id => {
    return {
      id
    }
  },
  EDIT_SUBMIT: id => {
    return {
      id
    }
  },
  FETCH_NEW: (cardData, color) => {
    return {
      cardData,
      color
    }
  },
  INPUT_CHANGE: (inputName, inputValue) => {
    return {
      inputName,
      inputValue
    }
  },
  PURGE: () => {},
  REMOVE: id => {
    return {
      id
    }
  },
  RESET: () => {},
  SET_FETCHER_COLOR: fetcherColor => {
    return {
      fetcherColor
    }
  },
  TOGGLE_ORDER: () => {}
})

export const preFetchNew = () => async (dispatch, getState) => {
  const {
    cardBoard: { fetcherColor }
  } = getState()

  dispatch(setFetcherColor(getRandomColor()))

  const postId = getRandomPostId()
  const [postError, post] = await to(axios(`https://jsonplaceholder.typicode.com/posts/${postId}`))

  if (postError) throw postError

  dispatch(fetchNew(post.data, fetcherColor))
}
