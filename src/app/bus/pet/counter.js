import React from 'react'
import { useQueryAvailablePets} from './hooks/useQueryAvailablePets'

export const Counter = () => {
  const { loading, error, data } = useQueryAvailablePets()

  if(loading) {
    return <p>loading</p>
  }

  if(error) {
    return <p>Some shit happen: {error.message}</p>
  }

  return (
    <p>Available pets: {data.availablePets}</p>
  )
}
