import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import axios from 'axios'
import CardMaker from './components/CardMaker/CardMaker'
import TodoCardList from './components/TodoCardList/TodoCardList'
import list from './list'
import Fetcher from './components/Fetcher/Fetcher'
import Options from './components/Options/Options'
import Modal from './components/Modal/Modal'
import LimitAlert from './components/LimitAlert/LimitAlert'

class App extends Component {
  state = {
    ascending: true,
    color: `secondary`,
    comment: ``,
    counter: list.length,
    currentCardToEdit: {
      color: ``,
      comment: ``,
      id: 0,
      title: ``
    },
    fetcherColor: getRandomColor(),
    isEditing: false,
    list,
    title: ``
  }

  handleReset = () => {
    this.setState(({ counter, list }) => {
      if (list.length === 0 && counter === 0) return

      if (list.length === 0 && counter !== 0) {
        return {
          counter: 0
        }
      }

      const newList = list.map((item, index) => {
        return {
          ...item,
          id: index
        }
      })

      const isDifferent = newList.some((newListItem, index) => newListItem.id !== list[index].id)

      if (!isDifferent) return

      const newCounter = newList.length

      return {
        counter: newCounter,
        list: newList
      }
    })
  }

  handlePurge = () => {
    this.setState(({ list }) => {
      if (list.length === 0) return

      return {
        list: []
      }
    })
  }

  handleOrderChange = () => {
    this.setState(({ ascending }) => {
      return {
        ascending: !ascending
      }
    })
  }

  handleEditSubmit = () => {
    this.setState(({ currentCardToEdit, list }) => {
      const { color, comment, id, title } = currentCardToEdit

      const editedCard = {
        color,
        comment,
        title
      }

      const newList = list.map(listItem => {
        if (listItem.id === id) {
          return {
            ...listItem,
            ...editedCard
          }
        }

        return listItem
      })

      return {
        isEditing: false,
        list: newList
      }
    })
  }

  handleAddNew = () => {
    this.setState(({
      color, comment, counter, list, title
    }) => {
      if (checkIfReachedLimit(list.length)) return

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
    })
  }

  handleEdit = idToEdit => {
    this.setState(({ list }) => {
      const newList = list.filter(item => item.id === idToEdit)

      return {
        currentCardToEdit: newList[0],
        isEditing: true
      }
    })
  }

  handleRemove = idToRemove => {
    this.setState(({ list }) => {
      const newList = list.filter(item => item.id !== idToRemove)

      return {
        list: newList
      }
    })
  }

  handleTitleChange = ({ target: { value } }) => {
    this.setState(({ currentCardToEdit, isEditing }) => {
      if (isEditing) {
        return {
          currentCardToEdit: {
            ...currentCardToEdit,
            title: value
          }
        }
      }

      return {
        title: value
      }
    })
  }

  handleFetchNew = () => {
    const postId = getRandomPostId()
    const { fetcherColor: storedFetcherColor } = this.state

    this.setState({
      fetcherColor: getRandomColor()
    })

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        this.setState(({ counter, list }) => {
          if (checkIfReachedLimit(list.length)) return

          const card = {
            color: storedFetcherColor,
            comment: getRandomShouldExist() ? response.data.body.slice(0, 128) : ``,
            id: counter,
            title: getRandomShouldExist() ? response.data.title.slice(0, 32) : ``
          }

          const newList = list.concat([card])
          const newCounter = counter + 1

          return {
            counter: newCounter,
            list: newList
          }
        })

        return
      })
      .catch(() => {})
  }

  handleCommentChange = ({ target: { value } }) => {
    this.setState(({ currentCardToEdit, isEditing }) => {
      if (isEditing) {
        return {
          currentCardToEdit: {
            ...currentCardToEdit,
            comment: value
          }
        }
      }

      return {
        comment: value
      }
    })
  }

  handleColorTheme = color => {
    this.setState(({ currentCardToEdit, isEditing }) => {
      if (isEditing) {
        return {
          currentCardToEdit: {
            ...currentCardToEdit,
            color
          }
        }
      }

      return {
        color
      }
    })
  }

  render() {
    const {
      ascending, color, comment, currentCardToEdit, fetcherColor, isEditing, list, title
    } = this.state

    const hasReachedLimit = checkIfReachedLimit(list.length)

    return (
      <Container>
        <Row className="mt-4">
          <Col className="m-auto" xs="12">
            <CardMaker
              color={color}
              comment={comment}
              hasReachedLimit={hasReachedLimit}
              title={title}
              onAddNew={this.handleAddNew}
              onColorTheme={this.handleColorTheme}
              onCommentChange={this.handleCommentChange}
              onTitleChange={this.handleTitleChange}
            />
          </Col>
        </Row>
        <TodoCardList ascending={ascending} list={list} onEdit={this.handleEdit} onRemove={this.handleRemove} />
        <Fetcher color={fetcherColor} hasReachedLimit={hasReachedLimit} onClick={this.handleFetchNew} />
        <Options
          ascending={ascending}
          onOrderChange={this.handleOrderChange}
          onPurge={this.handlePurge}
          onReset={this.handleReset}
        />
        <Modal
          color={currentCardToEdit.color}
          comment={currentCardToEdit.comment}
          id={currentCardToEdit.id}
          isOpen={isEditing}
          title={currentCardToEdit.title}
          onColorTheme={this.handleColorTheme}
          onCommentChange={this.handleCommentChange}
          onEditSubmit={this.handleEditSubmit}
          onTitleChange={this.handleTitleChange}
        />
        {hasReachedLimit && <LimitAlert />}
      </Container>
    )
  }
}

function getRandomColor() {
  const randomColorIndex = Math.floor((Math.random() * 10) / 2.5)
  let randomColor

  switch (randomColorIndex) {
    case 0:
      randomColor = `secondary`
      break
    case 1:
      randomColor = `danger`
      break
    case 2:
      randomColor = `success`
      break
    case 3:
      randomColor = `warning`
      break
    default:
      randomColor = `secondary`
      break
  }

  return randomColor
}

function getRandomPostId() {
  return Math.floor(Math.random() * 100)
}

function getRandomShouldExist() {
  return Math.random() >= 0.5
}

function checkIfReachedLimit(numberToCheck) {
  return numberToCheck > 99
}

export default React.memo(App)
