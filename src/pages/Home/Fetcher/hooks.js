import { useState, useCallback, useReducer } from 'react'
import axios from 'axios'
import to from 'await-to-js'
import { useCardBoard, useErrors } from './redux'
import { deepMemoReducer } from '~hooks/deepMemoReducer'

const getShouldExist = () => Math.random() >= 0.5
const getPostId = () => Math.floor(Math.random() * 100) || 1
const getColor = () => {
  const colorIndex = Math.floor((Math.random() * 10) / 2.5)
  const colors = [`secondary`, `danger`, `success`, `warning`]

  const randomColor = colors[colorIndex] || `secondary`

  return randomColor
}

export const useFetchNewCard = () => {
  const [color, setColor] = useState(() => getColor())
  const [spinners, setSpinners] = useReducer(deepMemoReducer, {
    counter: 0,
    list: []
  })

  const { handleAddCard } = useCardBoard()
  const { handleAddError } = useErrors()

  const handleFetchNewCard = useCallback(async () => {
    const cancelToken = axios.CancelToken.source()

    setSpinners(prevSpinners => {
      return {
        counter: prevSpinners.counter + 1,
        list: [
          ...prevSpinners.list,
          {
            cancelRequest: cancelToken.cancel,
            color,
            id: prevSpinners.counter
          }
        ]
      }
    })
    setColor(getColor())

    const postId = getPostId()

    const [postError, post] = await to(
      axios(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        cancelToken: cancelToken.token
      })
    )

    setSpinners(prevSpinners => {
      const newList = prevSpinners.list.filter(({ id }) => id !== spinners.counter)

      return {
        list: newList
      }
    })

    if (postError?.message === `limit`) {
      return null
    }

    if (postError) {
      handleAddError({
        message: postError.toString()
      })

      return null
    }

    const comment = getShouldExist() ? post.data.body.slice(0, 128) : ``
    const title = getShouldExist() ? post.data.title.slice(0, 32) : ``

    handleAddCard({
      color,
      comment,
      title
    })
  }, [color, handleAddCard, handleAddError, spinners.counter])

  return {
    color,
    handleFetchNewCard,
    spinners
  }
}
