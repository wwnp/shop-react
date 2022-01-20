import { BasketItem } from './BasketItem';
export const BasketList = props => {
  const {
    addedGoods,
    removeFromBasket,
    downQuantity,
    upQuantity,
    cartBtnHandler
  } = props
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
                      removeFromBasket={removeFromBasket}
                      downQuantity={downQuantity}
                      upQuantity={upQuantity}
                      img_back_url={item.img_back_url}
                    >
                    </BasketItem>
                  })
                )
                : (
                  <td colSpan={6} className=''>Тут пусто... <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pensive-face_1f614.png" width={50} alt="" /></td>
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

      {/* <div id="modal1" className="modal"> */}
      {/* <div id="modal1" className="modal bottom-sheet"> */}
      {/* <div style={{ position: 'relative' }}>
        <span className="close-btn" onClick={() => cartBtnHandler()}><i className="material-icons">close</i> </span>
        <div>
          <h5 className='center-align' style={{ paddingTop: '10px' }}>Корзина <i className="material-icons" style={{ color: '#26a69a', fontSize: '1.5rem' }}>shopping_cart</i></h5>
        </div>

        <div className="basket-content" style={{ overflow: 'auto' }}>
          <ul className="collection">
            <li href="#!" className="collection-item active"></li>
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
                      removeFromBasket={removeFromBasket}
                      downQuantity={downQuantity}
                      upQuantity={upQuantity}
                      img_back_url={item.img_back_url}
                    >
                    </BasketItem>
                  })
                )
                : (
                  <li href="#!" className="collection-item hover-custom">
                    Корзина пуста
                  </li>
                )
            }
            <li href="#!" className="collection-item active">
              Общая стоимость
              <b className='right'>
                {totalPrice}&nbsp;руб.
              </b>
            </li>


            <div className='center-align'>
              <button className='btn green' style={{ width: '100%' }}>Оформить заказ</button>
            </div>
          </ul>
        </div>
      </div> */}

    </div>
  )
}