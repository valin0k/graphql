import { useLazyQuery } from '@apollo/react-hooks'
import { loader } from 'graphql.macro'

const queryAllAvailablePets = loader('./queryAllAvailablePets.graphql')

export const useQueryAllAvailablePets = () => {
  const [getAllAvailablePets, {loading, error, data}] = useLazyQuery(queryAllAvailablePets)
}
