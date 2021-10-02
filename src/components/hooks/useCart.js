const { useEffect } = require("react")
const { useState } = require("react")
const { getStoredCart } = require("../../utilities/fakedb")

const useCart = (products) => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart()
      const storedCart = []
      for (let key in savedCart) {
        const addedProducts = products.find((product) => product.key === key)
        if (addedProducts) {
          // set quantity
          const quantity = savedCart[key]
          addedProducts.quantity = quantity
          storedCart.push(addedProducts)
        }
      }
      setCart(storedCart)
    }
  }, [products])
  return [cart, setCart]
}
export default useCart
