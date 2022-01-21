import React, { useContext } from 'react'
import { Good } from './Good'
import { ShopContex } from '../contex';
export const List = props => {
  const { goods = [] } = useContext(ShopContex);
  return (
    <div className="goods">
      {goods.map((good) => {
        return <Good
          key={good.offerId}
          displayName={good.displayName}
          displayType={good.displayType}
          buyAllowed={good.buyAllowed}
          regularPrice={good.price.regularPrice}
          finalPrice={good.price.finalPrice}
          offerId={good.offerId}
          mainId={good.mainId}
          img_url={good.displayAssets[0].full_background}
          img_back_url={good.displayAssets[0].background}
        >
        </Good>
      })}
    </div>
  )
}