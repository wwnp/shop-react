import React from 'react'
export const Cart = props => {
  const { addedGoods = 0 } = props
  return (
    <div className='cart'>
      <i className='material-icons'>shopping_cart</i>
      {addedGoods ? <span className='cart-quantity'>{addedGoods}</span> : null }
    </div>
  )
}