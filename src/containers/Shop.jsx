
import { Preloader } from '../components/Preloader';
import { List } from '../components/List';
// import { useShop } from './useShop';
import { useEffect, useState, useReducer, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import { Cart } from './../components/Cart';
import { BasketList } from '../components/BasketList';
// import M from "materialize-css/dist/js/materialize.min.js";
import { Alert } from './../components/Alert';
import { ShopContex } from '../contex';
import { reducer } from '../reducer';
// function addedGoodFromLS() {
//   const addedGoods = localStorage.getItem('cart')
//   return addedGoods ? JSON.parse(addedGoods) : []
// }
export const MAX_STACK = 9

export const Shop = props => {
  const {
    cartBtnHandler,
    fetchShop,
    loading,
    addedGoods,
    isBasketShowed,
    alertName,
    goods
  } = useContext(ShopContex)
  // const [{
  //   isBasketShowed,
  //   alertName,
  //   addedGoods,
  //   loading,
  //   goods,
  // }, dispatch] = useReducer(reducer, initialState);
  // const [goods, setGoods] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [addedGoods, setAddedGoods] = useState(addedGoodFromLS())
  // const [addedGoods, setAddedGoods] = useState([])
  // const [isBasketShowed, setIsBasketShowed] = useState(false)
  // const modalRef = useRef(null);
  // const [alertName, setAlertName] = useState('');

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    })
      .then((response) => response.json())
      .then((json) => {
        fetchShop(json.shop)
        // dispatch({ type: 'SET_GOODS', payload: json.shop })
        // setGoods(json.shop)
        // setTimeout(() => {
        // dispatch({ type: 'LOADING_FALSE' })
        // setLoading(false)
        // }, 800)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const closeAlert = () => {
  //   dispatch({ type: 'CLOSE_ALERT' })
  //   // setAlertName('')
  // }

  // useEffect(() => {
  //   let elem = document.querySelector('.modal');
  //   const modalInstanse = M.Modal.init(elem, { inDuration: 350, outDuration: 250, preventScrolling: true });
  //   // const modalInstanse = M.Modal.init(elem, { inDuration: 350, outDuration: 250, endingTop: '30%', startingTop: '100%', preventScrolling: true });
  //   modalRef.current = modalInstanse
  // }, [modalRef]);

  // const cartBtnHandler = () => {
  //   dispatch({ type: 'CART_HANDLER' })
  //   // setIsBasketShowed(!isBasketShowed)

  //   // modalRef.current.open()
  //   // return () => {
  //   //   modalRef.current.destroy();
  //   //   modalRef.current = null
  //   // }
  // }

  // const removeFromBasket = (mainId) => {
  //   dispatch({ type: 'REMOVE_FROM_BASKET', payload: mainId })
  //   // const newAddedGoods = addedGoods.filter(item => item.mainId !== mainId)
  //   // setAddedGoods(newAddedGoods)
  // }

  function modalRemover(e) {
    if (e.target.id === 'modal1') {
      cartBtnHandler()
      // setIsBasketShowed(!isBasketShowed)
    }
  }
  useEffect(() => {
    if (isBasketShowed) {
      window.addEventListener('click', modalRemover)
    }
    console.log(123)
    return () => {
      window.removeEventListener('click', modalRemover)
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBasketShowed]);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(addedGoods))
  }, [addedGoods]);


  // const downQuantity = (mainId) => {
  //   dispatch({ type: 'DOWN_QUANITY', payload: mainId })
  // const newAddedGoods = addedGoods.map(item => {
  //   if (item.mainId === mainId) {
  //     const newQuanity = item.quantity - 1
  //     return {
  //       ...item,
  //       quantity: newQuanity === 0 ? 1 : newQuanity
  //     }
  //   }
  //   else {
  //     return item
  //   }
  // })
  // const itemIndex = addedGoods.findIndex(good => good.mainId === mainId)
  // addedGoods[itemIndex].quantity = addedGoods[itemIndex].quantity - 1
  // const newAddedGoods = addedGoods.filter(item => item.quantity > 0)
  // setAddedGoods(newAddedGoods)
  // }
  // const upQuantity = (mainId) => {
  //   dispatch({ type: 'UP_QUANITY', payload: mainId })
  //   // const newAddedGoods = addedGoods.map(item => {
  //   //   if (item.mainId === mainId) {
  //   //     const newQuanity = item.quantity + 1
  //   //     if (newQuanity > MAX_STACK) {
  //   //       return item
  //   //     }
  //   //     return {
  //   //       ...item,
  //   //       quantity: newQuanity
  //   //     }
  //   //   }
  //   //   return item
  //   // })
  //   // setAddedGoods(newAddedGoods)
  //   // const itemIndex = addedGoods.findIndex(good => good.mainId === mainId)
  //   // if (addedGoods[itemIndex].quantity >= MAX_STACK) {
  //   //   return
  //   // }
  //   // addedGoods[itemIndex].quantity = addedGoods[itemIndex].quantity + 1
  //   // setAddedGoods([...addedGoods])
  // }
  return (
    <main className='container content' >
      <h1 className='align center'>Shop</h1>
      {alertName && <Alert></Alert>}
      <Cart addedGoods={addedGoods.length}></Cart>
      {isBasketShowed && <BasketList > </BasketList>}
      {isBasketShowed
        ? <BasketList></BasketList>
        : null
      }

      {goods.length === 0
        ? <h1>Let's search</h1>
        :
        loading
          ? <Preloader></Preloader>
          : <List></List>
      }
    </main>
  )
}

