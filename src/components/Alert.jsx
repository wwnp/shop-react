import React, { useEffect, useContext } from 'react'
import { ShopContex } from './../contex';
export const Alert = props => {
  const {
    alertName,
    closeAlert = Function.prototype
  } = useContext(ShopContex);

  useEffect(() => {
    let hideAlertInterval = setTimeout(closeAlert, 1000);
    return () => {
      clearTimeout(hideAlertInterval)
      hideAlertInterval = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alertName]);

  return (
    <div id='toast-container'>
      <div className="toast">Товар: "{alertName}" успешно добавлен в корзину</div>
    </div>
  )
}