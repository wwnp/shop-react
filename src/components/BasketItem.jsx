import React, { useContext } from 'react'
import { ShopContex } from './../contex';
export const BasketItem = props => {
  const {
    mainId,
    displayName: name,
    finalPrice,
    quantity,
    img_back_url
  } = props
  const {
    removeFromBasket,
    downQuantity,
    upQuantity
  } = useContext(ShopContex);
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
    // <li href="#!" className="collection-item hover-custom">
    //   <div style={{ display: 'flex', alignItems: 'center' }}>
    //     <img className='basket-item-img' src={img_back_url} alt="" style={{ width: '75px', height: '75px' }} />
    //     <span style={{ marginLeft: '1rem' }}> {name} x {quantity} </span>
    //     <div style={{ marginLeft: '1rem' }}>
    //       <i className="material-icons hover-plus-minus" style={{ border: '1px solid #ccc', cursor: 'pointer' }} onClick={() => upQuantity(mainId)}>plus_one</i>
    //       <i className="material-icons hover-plus-minus" style={{ border: '1px solid #ccc', cursor: 'pointer' }} onClick={() => downQuantity(mainId)}>exposure_neg_1</i>
    //     </div>
    //     <span href="#!" className="secondary-content" style={{ cursor: 'pointer', marginLeft: '1rem' }}>
    //       <i className="material-icons" onClick={() => removeFromBasket(mainId)}>close</i>
    //     </span>
    //     <span style={{ marginLeft: 'auto' }}>
    //       = {finalPrice * quantity} руб.
    //     </span>
    //   </div>



    //   {/* <span>
    //     {displayName} x {quantity}
    //   </span> */}
    // </li>
  )
}