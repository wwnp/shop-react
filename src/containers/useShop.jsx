import { useEffect, useState } from 'react'
import { API_URL } from '../config'
import { API_KEY } from '../config'
export const useShop = () => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    })
      .then((response) => response.json())
      .then((json) => {
        setGoods(json.shop)
        setTimeout(() => {
          setLoading(false)
        }, 800)
      })
  }, [])
  return {
    goods,
    loading
  }
}