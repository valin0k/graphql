import React from 'react'

import { useQueryAllAvailablePets } from './hooks/useQueryAllAvailablePets'

export const SpecialList = () => {
  const {getAllAvailablePets, loading, error, pets} = useQueryAllAvailablePets()

  const loaderJSX =

  return (
    <h1>SPecial list</h1>
  )
}
