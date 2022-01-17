import React from 'react'
export const Good = props => {
  const {
    displayName,
    displayType,
    buyAllowed,
    regularPrice,
    finalPrice,
    offerId,
    mainId,
    img_url,
    addToCart
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


      </div>
      <div className="card-action">
        <button className='btn' data-id={mainId} onClick={(e) => props.addToCart(e) }>Купить</button>
        {finalPrice === regularPrice
          ? <span className='badge-custom green'>{regularPrice} p</span>
          :
          <div style={{display:'flex'}}>
            <span className='badge-custom orange' style={{ textDecoration: 'line-through' }}>{regularPrice} p</span>
            <span className='badge-custom green'>{finalPrice} p</span>
            
          </div>
        }
      </div>
    </div>
  )
}