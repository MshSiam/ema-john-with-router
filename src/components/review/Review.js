import React from "react"

const Review = (props) => {
  const { name, price, quantity, img, key } = props.product
  const { handleRemove } = props
  return (
    <div className="product">
      <div>
        <h4 className="product-name">Name : {name}</h4>
        <p>Price : {price}</p>
        <p>Quantity : {quantity}</p>
        <button onClick={() => handleRemove(key)} className="btn-regular">
          Remove
        </button>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Review
