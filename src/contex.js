import React, { createContext } from "react";
import { useReducer } from "react";
import { reducer } from "./reducer";
export const ShopContex = createContext();
const initialState = {
  goods: [],
  loading: true,
  addedGoods: [],
  isBasketShowed: false,
  alertName: ''
}
export const ContexProvider = (props) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' })
  }
  value.removeFromBasket = (mainId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: mainId })
  }
  value.addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item })
  }
  value.cartBtnHandler = () => {
    dispatch({ type: 'CART_HANDLER' })
  }
  value.downQuantity = (mainId) => {
    dispatch({ type: 'DOWN_QUANITY', payload: mainId })
  }
  value.upQuantity = (mainId) => {
    dispatch({ type: 'UP_QUANITY', payload: mainId })
  }
  value.fetchShop = (data) => {
    dispatch({type:'FETCH_GOODS', payload:data})
  }
  return (<ShopContex.Provider value={value}>
    {props.children}
  </ShopContex.Provider>)
}

