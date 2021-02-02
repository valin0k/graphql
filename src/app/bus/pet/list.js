import React from 'react'

import { useQueryAllPets } from './hooks/useQueryAllPets'

export const List = () => {
  const { loading, error, pets } = useQueryAllPets()
console.log("__pets__", pets, loading)
  if(loading) {
    return <p>loading</p>
  }

  if(error) {
    return <p>Some shit happen: {error.message}</p>
  }

  return (
    <div>
    <h1>List</h1>
      {pets.map(({ weight, id, name }) => (
          <div key={id}>
            <span>id: {id}</span>
            <span>name: {name}</span>
            <span>weight: {weight}</span>
          </div>
        ))}
    </div>
  )
}
