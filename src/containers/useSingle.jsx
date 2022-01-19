import { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../config';
export const useSingle = props => {
  const params = useParams()
  const [single, setSingle] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`https://fortniteapi.io/v2/items/get?id=${params.slag}&lang=en`, {
      headers: {
        'Authorization': API_KEY
      }
    })
      .then((response) => response.json())
      .then((json) => {
        setSingle(json.item)
        setLoading(false)
      })
  }, [params.slag])
  return [
    single,
    loading
  ]
}