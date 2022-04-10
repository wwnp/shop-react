
import { Preloader } from '../components/Preloader';
import { List } from '../components/List';
import { useEffect, useState } from 'react';
import { API_KEY, API_URL, POSTS_PER_PAGE } from '../config';
import { Cart } from './../components/Cart';
import { BasketList } from '../components/BasketList';
import { Alert } from './../components/Alert';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Pagination, PaginationItem } from '@mui/material';

const queryString = require('query-string');

function addedGoodFromLS() {
  const addedGoods = localStorage.getItem('cart')
  return addedGoods ? JSON.parse(addedGoods) : []
}
const MAX_STACK = 9
export const Shop = props => {
  const location = useLocation()
  const navigate = useNavigate()

  const parsed = queryString.parse(location.search);
  const [page, setPage] = useState(+parsed.page || 1)
  const [quantity, setQuantity] = useState(0)


  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [addedGoods, setAddedGoods] = useState(addedGoodFromLS())
  const [isBasketShowed, setIsBasketShowed] = useState(false)
  const [alertName, setAlertName] = useState('');

  const [outPosts, setOutPosts] = useState(goods)
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    })
      .then((response) => response.json())
      .then((json) => {
        setGoods(json.shop)
        setQuantity(Object.keys(json.shop).length)
        setTimeout(() => {
          setLoading(false)
        }, 800)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    navigate(`?page=${page}`)
    const indexLast = page * POSTS_PER_PAGE
    const indexFirst = indexLast - POSTS_PER_PAGE
    setOutPosts(goods.slice(indexFirst, indexLast))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, goods])

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
          : <>
            <List goods={outPosts} addToCart={addToCart}></List>

          </>
      }

      <Pagination
        style={{
          position: 'absolute',
          bottom: '60px',
          left: '50%',
          transform: 'translateX(-50%)',
          minWidth: '200px',
          maxWidth: '600px'
        }}
        color={'secondary'}
        count={Math.ceil(quantity / POSTS_PER_PAGE)}
        page={page}
        onChange={(_, num) => setPage(num)}
        showFirstButton
        showLastButton
        sx={{ marginY: 3, marginX: "auto" }}
        renderItem={(item) => (
          <PaginationItem
            component={NavLink}
            to={`/?page=${item.page}`}
            {...item}
          />
        )}
      />

    </main>
  )
}

