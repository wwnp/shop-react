import { BasketItem } from './BasketItem';
export const BasketList = props => {
  const {
    addedGoods,
    removeFromBasket,
    downQuantity,
    upQuantity
  } = props
  return (
    <div id="modal1" className="basket-modal">
      {/* <div id="modal1" className="modal"> */}
      {/* <div id="modal1" className="modal bottom-sheet"> */}
      <div>
        <div>
          <h5 className='center-align' style={{ paddingTop: '10px' }}>Корзина <i className="material-icons" style={{ color: '#26a69a', fontSize: '1.5rem' }}>shopping_cart</i></h5>
        </div>

        <div className="basket-content">
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
                {addedGoods.reduce((total, item) => {
                  return total + (item.finalPrice * item.quantity)
                }, 0)}
                &nbsp;руб.
              </b>
            </li>


            <div className='center-align'>
              <button className='btn green' style={{ width: '100%' }}>Оформить заказ</button>
            </div>
          </ul>
        </div>
      </div>

    </div>
  )
}