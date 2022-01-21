import React, { useContext } from 'react'
import { ShopContex } from './../contex';
export const Cart = props => {
  const { addedGoods = [], cartBtnHandler } = useContext(ShopContex)
  const quantity = addedGoods.length
  return (
    <div className='cart' onClick={cartBtnHandler}>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  )
}