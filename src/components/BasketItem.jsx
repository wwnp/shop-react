import React from 'react'
export const BasketItem = props => {
  const {
    mainId,
    displayName: name,
    finalPrice,
    quantity,
    removeFromBasket,
    downQuantity,
    upQuantity,
    img_back_url
  } = props
  return (
    <tr>
      <td colSpan={1} style={{ fontSize: '0px' }}>
        <img className='basket-item-img' src={img_back_url} alt="" />
      </td>
      <td colSpan={2} className='basket-item-name'>
        {name} x {quantity}
      </td>
      <td colSpan={1}>
        <i className="material-icons hover-inc-custom noselect" style={{ border: '1px solid #ccc', cursor: 'pointer' }} onClick={() => upQuantity(mainId)}>plus_one</i>
        <i className="material-icons hover-dec-custom noselect" style={{ border: '1px solid #ccc', cursor: 'pointer' }} onClick={() => downQuantity(mainId)}>exposure_neg_1</i>
      </td>
      <td colSpan={1}>
        <i className="material-icons hover-remove-custom" onClick={() => removeFromBasket(mainId)}>close</i>
      </td>
      <td className='right-align' colSpan={1} style={{ width: '175px' }}>
        = {finalPrice * quantity} руб.
      </td>
    </tr>
  )
}