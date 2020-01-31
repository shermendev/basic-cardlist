import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useCardBoard } from './redux'

const defaultValues = {
  color: `secondary`,
  comment: ``,
  title: ``
}

export const useSubmitCard = () => {
  const { cardToEdit, handleAddCard, handleEditCard, isEditing } = useCardBoard()

  const formOptions = useMemo(() => {
    return {
      defaultValues: isEditing
        ? {
          ...cardToEdit
        }
        : {
          ...defaultValues
        }
    }
  }, [cardToEdit, isEditing])

  const { errors, handleSubmit, register, reset, setValue, watch } = useForm(formOptions)

  const color = watch(`color`)

  useEffect(() => {
    register(
      {
        name: `color`,
        type: `custom`
      },
      {
        required: true
      }
    )
  }, [register])

  const handleColorChange = useCallback(
    newColor => {
      setValue(`color`, newColor)
    },
    [setValue]
  )

  const onSubmit = useCallback(
    handleSubmit(data => {
      if (isEditing) {
        handleEditCard(data)
      } else {
        handleAddCard(data)

        reset({
          ...defaultValues
        })
      }
    }),
    [handleAddCard, handleEditCard, isEditing, reset]
  )

  return {
    color,
    errors,
    handleColorChange,
    handleSubmit,
    onSubmit,
    register
  }
}
