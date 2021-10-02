import React from "react"
import useProducts from "../hooks/useProducts"
import useCart from "../hooks/useCart"
import Cart from "../Cart/Cart"
import Review from "../review/Review"
import { removeFromDb } from "../../utilities/fakedb"

const OrderReview = () => {
  const [products] = useProducts()
  const [cart, setCart] = useCart(products)
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key)
    setCart(newCart)
    removeFromDb(key)
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <Review
            product={product}
            key={product.key}
            handleRemove={handleRemove}></Review>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}

export default OrderReview
