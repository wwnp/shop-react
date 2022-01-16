import React, { useState } from 'react'
import { Search } from '../components/Search'
export const AccId = props => {
  const [accId, setAccId] = useState(null)
  const [loading, setLoading] = useState(false)
  console.log(accId)
  return (
    <main >
      <Search setAccId={setAccId} setLoading={setLoading}></Search>
      {
        accId === null
          ? <h1>Let's search</h1>
          :
          loading
            ? <h1>Loading...</h1>
            :
            accId?.result === true
              ? <h1>Account ID:{accId?.account_id}</h1>
              : <h1>Error</h1>
      }
    </main>
  )
}