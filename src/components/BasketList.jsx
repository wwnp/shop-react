import React, { useContext } from 'react'
import { ShopContex } from './../contex';
import { BasketItem } from './BasketItem';
export const BasketList = props => {
  const {
    addedGoods = [],
    cartBtnHandler
  } = useContext(ShopContex);
  const totalPrice = addedGoods.reduce((total, item) => {
    return total + (item.finalPrice * item.quantity)
  }, 0)
  return (
    <div id="modal1" className="basket-modal">
      <div className='basket-wrapper'>
        <table className='highlight'>
          <thead>
            <tr>
              <th className='center-align' colSpan={6}><b>Корзина</b></th>
            </tr>
          </thead>
          <tbody>
            {
              addedGoods.length
                ? (
                  addedGoods.map(item => {
                    return <BasketItem
                      key={item.mainId}
                      mainId={item.mainId}
                      displayName={item.displayName}
                      finalPrice={item.finalPrice}
                      quantity={item.quantity}
                      img_back_url={item.img_back_url}
                    >
                    </BasketItem>
                  })
                )
                : (
                  <tr>
                    <td colSpan={6} className=''>Тут пусто... <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pensive-face_1f614.png" width={50} alt={'face'} /></td>
                  </tr>
                )
            }
            <tr>
              <td colSpan={5}>Итого:</td>
              <td colSpan={1} className='right-align'> = <b>{totalPrice}</b> руб.</td>
            </tr>
            <tr>
              <td className='center' colSpan={6}>
                <button className='btn '>Оформить заказ</button>
              </td>
            </tr>
          </tbody>
        </table>
        <span className="close-btn" onClick={() => cartBtnHandler()}><i className="material-icons">close</i> </span>
      </div>
    </div>
  )
}