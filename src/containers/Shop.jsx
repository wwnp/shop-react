
import { Preloader } from '../components/Preloader';
import { List } from '../components/List';
import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import { Cart } from './../components/Cart';
import { BasketList } from '../components/BasketList';
import { Alert } from './../components/Alert';

function addedGoodFromLS() {
  const addedGoods = localStorage.getItem('cart')
  return addedGoods ? JSON.parse(addedGoods) : []
}
const MAX_STACK = 9
export const Shop = props => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [addedGoods, setAddedGoods] = useState(addedGoodFromLS())
  const [isBasketShowed, setIsBasketShowed] = useState(false)
  const [alertName, setAlertName] = useState('');

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

  const closeAlert = () => {
    setAlertName('')
  }

  const addToCart = (item) => {
    const itemIndex = addedGoods.findIndex(good => good.mainId === item.mainId)
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setAddedGoods([...addedGoods, newItem])
      setAlertName(item.displayName)
    } else {
      const newAddedGoods = addedGoods.map((good, index) => {
        if (index === itemIndex) {
          if (good.quantity >= MAX_STACK) {
            return good
          }
          setAlertName(item.displayName)
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

  const cartBtnHandler = () => {
    setIsBasketShowed(!isBasketShowed)
  }

  const removeFromBasket = (id) => {
    const newAddedGoods = addedGoods.filter(item => item.mainId !== id)
    setAddedGoods(newAddedGoods)
  }

  useEffect(() => {
    if (isBasketShowed) {
      window.addEventListener('click', (e) => {
        if (e.target.id === 'modal1') {
          setIsBasketShowed(!isBasketShowed)
        }
      })
    }
    return () => {
      window.onClick = null
    };
  }, [isBasketShowed]);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(addedGoods))
  }, [addedGoods]);


  const downQuantity = (mainId) => {
    const newAddedGoods = addedGoods.map(item => {
      if (item.mainId === mainId) {
        const newQuanity = item.quantity - 1
        return {
          ...item,
          quantity: newQuanity === 0 ? 1 : newQuanity
        }
      }
      else {
        return item
      }
    })
    setAddedGoods(newAddedGoods)
  }
  const upQuantity = (mainId) => {
    const newAddedGoods = addedGoods.map(item => {
      if (item.mainId === mainId) {
        const newQuanity = item.quantity + 1
        if (newQuanity > MAX_STACK) {
          return item
        }
        return {
          ...item,
          quantity: newQuanity
        }
      }
      return item
    })
    setAddedGoods(newAddedGoods)
  }
  return (
    <main className='container content' >
      <h1 className='align center'>Shop</h1>
      {alertName && <Alert alertName={alertName} closeAlert={closeAlert}></Alert>}
      <Cart addedGoods={addedGoods.length} onClick={() => cartBtnHandler(!isBasketShowed)}></Cart>
      {isBasketShowed && <BasketList
        addedGoods={addedGoods}
        removeFromBasket={removeFromBasket}
        downQuantity={downQuantity}
        upQuantity={upQuantity}
        cartBtnHandler={cartBtnHandler}
      >
      </BasketList>}

      {goods.length === 0
        ? <h1>Let's search</h1>
        :
        loading
          ? <Preloader color='red'></Preloader>
          : <List goods={goods} addToCart={addToCart}></List>
      }
    </main>
  )
}

