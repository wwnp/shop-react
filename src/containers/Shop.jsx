import { Preloader } from '../components/Preloader';
import { List } from '../components/List';
// import { useShop } from './useShop';
import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import { Cart } from './../components/Cart';
export const Shop = props => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(0)
  const [addedGoods, setAddedGoods] = useState([])
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

  const addToCart = (e) => {
    if (!addedGoods.includes(e.target.dataset.id)) {
      const newArr = [...addedGoods]
      newArr.push(e.target.dataset.id)
      setAddedGoods(newArr)
      setQuantity(quantity + 1)
    }
  }
  // const {
  //   goods,
  //   loading
  // } = useShop()
  return (
    <main className='container content' >
      <h1>Shop</h1>
      <Cart quantity={quantity}></Cart>
      {goods.length === 0
        ? <h1>Let's search</h1>
        :
        loading
          ? <Preloader></Preloader>
          : <List goods={goods} addToCart={addToCart}></List>
      }
    </main>
  )
} 