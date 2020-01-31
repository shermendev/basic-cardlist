import { useEffect, useState } from 'react'

export const useShouldRedirect = completed => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [redirectTimer, setRedirectTimer] = useState()

  useEffect(() => {
    const setDeferredRedirect = () => {
      setRedirectTimer(
        setTimeout(() => {
          setShouldRedirect(true)
        }, 1_000)
      )
    }

    if (completed) {
      setDeferredRedirect()
    }
  }, [completed])

  useEffect(
    () => () => {
      clearTimeout(redirectTimer)
    },
    [redirectTimer]
  )

  return shouldRedirect
}
