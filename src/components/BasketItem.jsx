import React from 'react'
export const BasketItem = props => {
  const {
    mainId,
    displayName: name,
    finalPrice,
    quantity,
    removeFromBasket,
    downQuantity,
    upQuantity
  } = props
  return (
    <li href="#!" className="collection-item hover-custom">
      <p>
        {name} x {quantity}
      </p>
      <span></span>
      <i className="material-icons hover-plus-minus" style={{ border: '1px solid #ccc', cursor: 'pointer' }} onClick={() => upQuantity(mainId)}>plus_one</i>
      <i className="material-icons hover-plus-minus" style={{ border: '1px solid #ccc', cursor: 'pointer' }} onClick={() => downQuantity(mainId)}>exposure_neg_1</i>

      <span href="#!" className="secondary-content" style={{ cursor: 'pointer', marginLeft: '1rem' }}>
        <i className="material-icons" onClick={() => removeFromBasket(mainId)}>close</i>
      </span>

      <span className='right'>
        = {finalPrice * quantity} руб.
      </span>

      {/* <span>
        {displayName} x {quantity}
      </span> */}


    </li>
  )
}