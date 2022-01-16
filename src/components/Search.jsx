import React from 'react'
import { useState } from 'react';
export const Search = props => {
  const { setAccId, setLoading } = props
  const [search, setSearch] = useState('')
  const handleUpdate = (e, name) => {
    if (e.key === 'Enter') {
      setLoading(true)
      fetch(`https://fortniteapi.io/v1/lookup?username=${name}`, {
        headers: {
          Authorization: 'c0a755ed-4a8213ba-aac17e43-7f534fe7'
        }
      })
        .then((response) => response.json())
        .then((json) => {
          setAccId(json)
          setTimeout(() => {
            setLoading(false)
          }, 2000)
        })
    }
  }
  return (
    <div className='row'>
      <div className="col s12">
        <div className="input-field">
          <input
            type="search"
            className="validate"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={e => handleUpdate(e, search)}
          />
        </div>
      </div>
    </div>
  )
}