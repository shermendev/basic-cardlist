import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

const Head = () => {
  const { pathname } = useLocation()

  const pageTitle = pathname.length > 1 ? `Cardboard - ${pathname.slice(1)}` : `Cardboard`

  return (
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  )
}

export default Head
