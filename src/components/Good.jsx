import React from 'react'
console.log('asd'.__proto__)
export const Good = props => {
  const {
    displayName,
    displayType,
    buyAllowed,
    regularPrice,
    finalPrice,
    offerId,
    mainId,
    img_url
  } = props
  // console.log(offerId)
  // console.log(offerId.slice(offerId.indexOf('/')+1))
  return (
    <div className="card" >
      <div className="card-image">
        <img
          src={
            !img_url
              ? `https://via.placeholder.com/252x372?text=${displayName}`
              : img_url
          }
          alt={displayName}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{buyAllowed}</p>
        <p>{displayType}</p>
        {finalPrice === regularPrice
          ? <span className='badge-custom green'>{regularPrice} p</span>
          :
          <>
            <span className='badge-custom green'>{finalPrice} p</span>
            <span className='badge-custom orange' style={{ textDecoration: 'line-through' }}>{regularPrice} p</span>
          </>
        }
      </div>
      <div className="card-action">
        <a href={"/shop/" + mainId}>Подробнее</a>
      </div>
    </div>
  )
}