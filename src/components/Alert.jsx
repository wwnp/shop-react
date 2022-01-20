import React, { useEffect } from 'react'
export const Alert = props => {
  const { alertName, closeAlert = Function.prototype } = props

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