import { Preloader } from '../components/Preloader';
import { List } from '../components/List';
// import { useShop } from './useShop';
import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
export const Shop = props => {
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
  // const {
  //   goods,
  //   loading
  // } = useShop()
  return (
    <main className='container content' >
      <h1>Shop</h1>
      {goods.length === 0
        ? <h1>Let's search</h1>
        :
        loading
          ? <Preloader></Preloader>
          : <List goods={goods}></List>
      }
    </main>
  )
}