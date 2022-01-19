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
  const addToCart = (item) => {
    const itemIndex = addedGoods.findIndex(good => good.mainId === item.mainId)
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setAddedGoods([...addedGoods, newItem])
    } else {
      console.log(456)
      const newAddedGoods = addedGoods.map((good, index) => {
        if (index === itemIndex) {
          return {
            ...good,
            quantity: good.quantity + 1
          }
        } else {
          return good
        }
      })
      setAddedGoods(newAddedGoods)
    }
  }
  return (
    <main className='container content' >
      <h1 className='align center'>Shop</h1>
      <Cart addedGoods={addedGoods.length}></Cart>
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